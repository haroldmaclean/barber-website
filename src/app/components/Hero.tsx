'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'

export default function Hero() {
  return (
    <section className='relative w-full h-[500px] mt-[72px]'>
      {/* Toast notifications */}
      <Toaster position='top-center' />

      {/* Optimized Image */}
      <Image
        src='/assets/hero.png'
        alt='Barber banner'
        fill
        priority
        quality={80}
        sizes='100vw'
        className='object-cover z-0'
      />

      {/* Content Layer */}
      <div className='absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4'>
        <h1 className='text-white text-4xl md:text-6xl font-bold drop-shadow-lg'>
          Sharp Looks. Smooth Style.
        </h1>

        {/* CTA Buttons */}
        <div className='mt-6 flex flex-wrap gap-4 justify-center'>
          {/* Redirects to your dedicated PayFast page */}
          <Link href='/pay'>
            <button className='bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition'>
              Pay Now – Premium Cut
            </button>
          </Link>

          {/* Contact Form */}
          <Link href='/contact'>
            <button className='bg-black text-white font-semibold px-6 py-2 rounded hover:bg-gray-800 transition'>
              Book Appointment
            </button>
          </Link>

          {/* About Page */}
          <Link href='/about'>
            <button className='border border-yellow-400 text-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition'>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
