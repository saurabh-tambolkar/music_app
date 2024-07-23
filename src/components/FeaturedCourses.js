'use client'
import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

function FeaturedCourses() {
  const courses = courseData.courses.filter((course) => course.isFeatured);

  return (
    <div className="py-12 dark:bg-slate-950 bg-indigo-100">
      <div className="space-y-4">
        <h1 className=" text-xl font-bold text-teal-700 text-center">
          Featured Courses
        </h1>
        <p className="text-4xl text-center text-slate-900 dark:text-white font-bold">Learn with the best</p>
      </div>
      <div className="mt-10 p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course) => {
            return (
              <div key={course.id} className="flex justify-center max-h-96 ">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-slate-900 dark:bg-zinc-900">
                  <p className="text-base sm:text-xl  mt-4 mb-2 text-white dark:text-neutral-200">
                    {course.title}
                  </p>

                  <p className="text-sm text-white dark:text-neutral-400">
                   {course.description}
                  </p>
                  <p className="text-sm py-2 font-semibold text-white dark:text-neutral-400">
                   Instructor : {course.instructor}
                  </p>
                  <Link className="text-white dark:text-white" href={`/courses/${course.slug}`}>Learn more </Link>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.8rem] px-2 py-0 text-white">
                      {course.price} $
                    </span>
                  </button>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <Link href="/courses" className="">
          <button style={{ borderRadius: '1.75rem',borderWidth:'2px'}} className="transition-all duration-200   hover:font-semibold  bg-black border p-4 border-slate-850/50  dark:bg-white text-white dark:text-black  dark:border-white-200" >
          View all courses
          </button>               
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
