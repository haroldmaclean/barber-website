'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed inset-x-0 top-0 z-50 bg-gray-800 bg-opacity-70 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center'>
      {/* Left: Brand */}
      <div className='text-xl font-bold'>
        <Link href='/' className='hover:text-gray-400'>
          HaroldCuts
        </Link>
      </div>

      {/* Middle: Nav Links (Desktop) */}
      <ul className='hidden md:flex space-x-6'>
        <li>
          <Link href='/' className='hover:text-gray-400'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:text-gray-400'>
            About
          </Link>
        </li>
        <li>
          <Link href='/services' className='hover:text-gray-400'>
            Services
          </Link>
        </li>
        <li>
          <Link href='/contact' className='hover:text-gray-400'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: Theme Toggle + Mobile Menu Button */}
      <div className='flex items-center space-x-4'>
        <ThemeToggle />
        <button
          className='md:hidden focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className='absolute top-full inset-x-0 w-full bg-gray-800 flex flex-col space-y-2 p-4 md:hidden'>
          <li>
            <Link
              href='/'
              className='block py-2 hover:text-gray-400'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='block py-2 hover:text-gray-400'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              className='block py-2 hover:text-gray-400'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='block py-2 hover:text-gray-400'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          {/* Optional: Mobile toggle at bottom */}
          <li className='pt-2 border-t border-gray-700'>
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  )
}
