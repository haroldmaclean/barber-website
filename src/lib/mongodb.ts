import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.')
}

// Extend NodeJS global type for mongoose
declare global {
  var mongooseCache: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}

const globalForMongoose = globalThis as typeof globalThis & {
  mongooseCache: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}

// Only one shared cached connection across hot reloads in dev
const cached = globalForMongoose.mongooseCache || {
  conn: null,
  promise: null,
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'barberWebsite',
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  globalForMongoose.mongooseCache = cached
  return cached.conn
}
