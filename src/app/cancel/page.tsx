// src/app/cancel/page.tsx
'use client'
import Link from 'next/link'

export default function CancelPage() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4'>
      <h1 className='text-4xl font-bold text-red-600 mb-4'>
        Payment Cancelled
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        Your payment was cancelled. No charges were made.
      </p>
      <Link
        href='/'
        className='px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition'
      >
        Back to Home
      </Link>
    </main>
  )
}
