'use client'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  price: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div className='bg-white rounded-lg shadow p-6 text-center'>
      <Icon className='w-10 h-10 mx-auto text-gray-700 mb-4' />
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <p className='text-gray-600 mb-4'>From {price}</p>
      <button
        onClick={() => (window.location.href = '/contact')} // You can change this later
        className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'
      >
        Book Now
      </button>
    </div>
  )
}
