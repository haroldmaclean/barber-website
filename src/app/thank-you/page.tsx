'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/' // Force full reload
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4 animate-fade-in'>
      <h1 className='text-4xl font-bold text-green-600 mb-4 animate-bounce'>
        Thank You!
      </h1>
      <p className='text-lg text-gray-700 max-w-md mb-6'>
        Your payment was successful. <br />
        You’ll be redirected to the homepage shortly.
      </p>
      <Link
        href='/'
        className='inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition'
      >
        Go to Home Now
      </Link>
    </main>
  )
}
