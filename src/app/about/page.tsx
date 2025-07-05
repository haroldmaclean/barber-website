import { Scissors, Clock, Star } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Existing About Section */}
      <section className='px-4 sm:px-6 py-16 bg-white text-gray-800'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl font-bold mb-6'>About HaroldCuts</h1>
          <Image
            src='/assets/about.jpg'
            alt='Barber tools'
            width={800}
            height={400}
            className='w-full h-auto rounded-lg mb-8 shadow'
            priority
          />

          {/* Applied responsive text alignment and sizing */}
          <p className='text-center sm:text-left text-base sm:text-lg mb-4'>
            At HaroldCuts, we believe that a great haircut is more than just a
            look — it&apos;s a feeling.
          </p>
          <p className='text-center sm:text-left text-base sm:text-lg mb-4'>
            With skilled barbers, modern tools, and a passion for precision, we
            deliver style that speaks confidence.
          </p>

          {/* Highlights Section - UPDATED GRID FOR RESPONSIVENESS and mt-10 */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
            <div className='flex flex-col items-center'>
              <Scissors className='w-10 h-10 text-black mb-2' />
              <p className='font-semibold text-center'>Professional Barbers</p>
            </div>
            <div className='flex flex-col items-center'>
              <Clock className='w-10 h-10 text-black mb-2' />
              <p className='font-semibold text-center'>Flexible Appointments</p>
            </div>
            <div className='flex flex-col items-center'>
              <Star className='w-10 h-10 text-black mb-2' />
              <p className='font-semibold text-center'>Top Rated Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Philosophy */}
      <section className='px-4 sm:px-6 py-16 bg-gray-100 text-gray-800'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            Our Philosophy
          </h2>
          <p className='mb-4 text-lg text-center'>
            At HaroldCuts, our philosophy is simple: provide exceptional
            service, foster a welcoming atmosphere, and ensure every client
            leaves feeling refreshed and confident. We are dedicated to the
            craft of barbering and committed to continuous improvement.
          </p>
          <p className='mb-4 text-lg text-center'>
            We understand that a great haircut can boost your self-esteem and
            positively impact your day. That&apos;s why we meticulously focus on
            every detail, from the precision of our cuts to the comfort of our
            chairs.
          </p>
        </div>
      </section>
    </>
  )
}
