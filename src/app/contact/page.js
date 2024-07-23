'use client'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen w-full py-12 pt-36 bg-white dark:bg-black flex flex-col items-center'>
      <h1 className='text-6xl text-center mt-12 font-bold text-black dark:text-white'>Contact Us</h1>
      <div className='pt-20 mx-4 flex flex-col items-center space-y-4 w-full'>
        <input placeholder='Enter your email' className='bg-white border border-slate-800 text-black p-3 font-semibold rounded dark:bg-slate-900 w-96 sm:w-3/6'/>

        <textarea cols={4} rows={3} unselectable='false' placeholder='Enter your message' className='bg-white border border-slate-800 text-black p-3 font-semibold rounded w-96 sm:w-3/6 dark:bg-slate-900 '/>

        <button className='bg-black dark:bg-white px-5 p-3 rounded-full flex flex-row items-center space-x-2'>
            <span className='text-xl font-semibold text-white dark:text-black'>
                Send
            </span>
                
        </button>
      </div>
    </div>
  )
}

export default page
