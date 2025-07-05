import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Contact } from '@/models/Contact' // ✅ Use default export if your model file uses `export default`

export async function POST(req: Request) {
  try {
    await connectDB()

    const { name, email, message } = await req.json()

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const contact = new Contact({ name, email, message })
    await contact.save()

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 201 }
    )
  } catch (err) {
    console.error('❌ Contact save error:', err)
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    )
  }
}
