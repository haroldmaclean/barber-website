// src/app/components/Footer.tsx
'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-zinc-900 text-white py-6 mt-12'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} HaroldCuts. All rights reserved.
        </p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <Link href='/' className='hover:underline'>
            Home
          </Link>
          <Link href='/services' className='hover:underline'>
            Services
          </Link>
          <Link href='/contact' className='hover:underline'>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
