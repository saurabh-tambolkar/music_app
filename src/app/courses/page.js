'use client'
import React from 'react'
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from '@/data/music_courses.json'
import Link from 'next/link';

function page() {
  return (
    <div className='min-h-screen w-full py-12 pt-36 bg-white dark:bg-black'>
      <h1 className='text-center font-bold text-4xl text-black dark:text-white'>
       All Courses ({courseData.courses.length})
    </h1>
    <div className="flex mt-10 mx-auto w-full flex-wrap justify-center">
        {
            courseData.courses.map((course, index) =>{
                return(
                    <CardContainer key={index} className=" h-[21rem] inter-var m-2">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white"
        >
         {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-700 dark:text-neutral-300"
        >
           {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
        <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {course.price} $
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={`/courses/${course.slug}`}
            target=""
            className="px-4 py-2 rounded-xl text-xs font-semibold text-black dark:text-white"
          >
            Take a look →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
                )
            })
        }
    </div>
    </div>
  )
}

export default page
