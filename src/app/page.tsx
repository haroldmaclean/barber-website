'use client'
// Triggered redeploy by adding this comment

import Hero from './components/Hero'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <>
      <Hero />
      <section className='flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6'>
        <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-4'>
          Welcome to HaroldCuts 💈
        </h1>
        <p className='text-lg md:text-xl text-gray-600 max-w-2xl mb-6'>
          Premium grooming and sharp styles delivered with precision. Book your
          appointment today!
        </p>
        <Gallery />
      </section>
    </>
  )
}
