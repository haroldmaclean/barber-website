'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email'
    if (!formData.message) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
        window.location.href = '/thank-you'
      } else {
        toast.error('Failed to send message.')
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong.')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto mt-24 md:mt-32 space-y-6 p-6 rounded-lg bg-white shadow dark:bg-zinc-900 transition-colors duration-300'
      >
        {/* Name */}
        <div>
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
            className={`w-full p-3 border rounded-md bg-gray-100 dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400 ${
              errors.name
                ? 'border-red-500'
                : 'border-gray-300 dark:border-zinc-700'
            }`}
          />
          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
            className={`w-full p-3 border rounded-md bg-gray-100 dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400 ${
              errors.email
                ? 'border-red-500'
                : 'border-gray-300 dark:border-zinc-700'
            }`}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name='message'
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            className={`w-full p-3 border rounded-md bg-gray-100 dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400 ${
              errors.message
                ? 'border-red-500'
                : 'border-gray-300 dark:border-zinc-700'
            }`}
          />
          {errors.message && (
            <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition dark:bg-yellow-400 dark:hover:bg-yellow-300'
        >
          Send Message
        </button>
      </form>

      {/* Social Media Buttons */}
      <div className='mt-10 text-center space-y-4'>
        <p className='text-lg font-medium dark:text-white'>Or reach us via:</p>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://wa.me/+27670828471'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'
          >
            WhatsApp
          </a>
          <a
            href='https://www.facebook.com/your_page_here'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
          >
            Facebook
          </a>
          <a
            href='mailto:esthermchenga@gmail.com'
            className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition'
          >
            Email
          </a>
        </div>
      </div>
    </>
  )
}
