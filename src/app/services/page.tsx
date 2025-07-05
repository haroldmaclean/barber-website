'use client' // Mark this as a client component
import { Scissors, Brush, Shield } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

export default function ServicesPage() {
  // ✅ Move the array inside the client component
  const services = [
    {
      icon: Scissors,
      title: 'Classic Haircut',
      description:
        'Timeless styles with a fresh edge. Perfect fades, trims, and detailing.',
      price: 'R150',
    },
    {
      icon: Brush,
      title: 'Beard Grooming',
      description:
        'Shaping, lining, and conditioning for a clean, professional beard.',
      price: 'R120',
    },
    {
      icon: Shield,
      title: 'Hair & Scalp Care',
      description:
        'Deep cleanse, scalp massage, and treatment for healthy hair.',
      price: 'R200',
    },
  ]

  return (
    <section className='min-h-screen py-16 bg-gray-50 text-gray-900'>
      <section className='bg-gray-100 py-12 px-4 sm:px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to HaroldCuts</h1>
          <p className='text-lg text-gray-700'>
            Discover precision barbering and premium grooming services in one
            place.
          </p>
        </div>
      </section>

      <div className='max-w-5xl mx-auto px-4 sm:px-6 mt-10'>
        <h2 className='text-4xl font-bold text-center mb-10'>Our Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
      <section className='mt-16 bg-black text-white py-12 px-6 rounded-lg shadow-lg text-center'>
        <h2 className='text-3xl font-bold mb-4'>Ready for a Fresh Look?</h2>
        <p className='mb-6 text-lg'>
          Book your appointment now and experience top-tier grooming.
        </p>
        <a
          href='/contact'
          className='bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition'
        >
          Contact Us
        </a>
        <button className='bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition'>
          Book Now
        </button>
      </section>
      {/* <div className='mt-16 text-center'>
        <h3 className='text-2xl font-semibold mb-4'>Ready for a fresh look?</h3>
        <p className='text-gray-700 mb-6'>
          Book your appointment today and step out in style.
        </p>
        <button className='bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition'>
          Book Now
        </button>
      </div> */}
    </section>
  )
}
