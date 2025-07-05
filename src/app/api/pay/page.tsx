// // app/pay/page.tsx
// 'use client'

// export default function PayPage() {
//   return (
//     <section className='min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100'>
//       <h1 className='text-3xl font-bold mb-6 text-zinc-900'>Secure Payment</h1>

//       <form
//         method='POST'
//         action='https://sandbox.payfast.co.za/eng/process'
//         className='bg-white p-6 rounded shadow-md w-full max-w-md space-y-4'
//       >
//         <input type='hidden' name='merchant_id' value='10040150' />
//         <input type='hidden' name='merchant_key' value='0siw5ue4kl3et' />
//         <input type='hidden' name='amount' value='150.00' />
//         <input type='hidden' name='item_name' value='Premium Cut' />
//         <input
//           type='hidden'
//           name='return_url'
//           value='https://haroldcuts.vercel.app/thank-you'
//         />
//         <input
//           type='hidden'
//           name='cancel_url'
//           value='https://haroldcuts.vercel.app/cancel'
//         />

//         <button
//           type='submit'
//           className='w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition'
//         >
//           Pay R150
//         </button>
//       </form>
//     </section>
//   )
// }

