'use client'
import React from 'react'
import courseData from '@/data/music_courses.json'
import Image from 'next/image';

function page({params}) {
  console.log(params.slug)  
  let url=params.slug;

  const course = courseData.courses.filter((course) => course.slug===url);
  console.log(course)

  return (
    <div className='min-h-screen bg-white dark:bg-black  flex justify-center items-center'>
      {
        course.map((course)=>{
          return(
            <div key={course.id} className='flex p-8 flex-row justify-center items-center mx-auto gap-8 border border-black dark:border-white rounded-lg'>
              <div>
                <Image src={course.image} className='h-[15rem] w-full' width={500} height={1500} alt='images'/>
              </div>
              <div className='w-3/6 text-start space-y-4'>
              <h1 className='text-4xl font-bold text-black dark:text-white'>{course.title}</h1>
              <h2 className='text-xl font-bold text-black dark:text-white'>Instructor : {course.instructor}</h2>
              <p className=' text-black dark:text-white'>{course.description}</p>
              <p className=' text-black dark:text-white'>Price : {course.price} $</p>
              <button className='bg-black text-white dark:bg-white dark:text-black p-1 rounded'>Make it yours !</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default page
