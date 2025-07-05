'use client'

import Image from 'next/image'

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
]

export default function Gallery() {
  return (
    <section className='py-16 px-4 bg-gray-100 dark:bg-zinc-900 transition-colors duration-300'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white'>
        Our Style Gallery
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {images.map((src, index) => (
          <div
            key={index}
            className='relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-white dark:bg-zinc-800'
          >
            <Image
              src={src}
              alt={`Barber style ${index + 1}`}
              fill
              priority={index === 0}
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 ease-in-out'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
