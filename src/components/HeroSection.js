'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {

  let color;
  useEffect(()=>{
    let theme = localStorage.getItem('theme');
    color = theme === "light" ? "black" : "white"
  },[])

  return (
    <div className="max-h-full md:h-[45rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="top-0 left-10 md:left-60 md:-top-20" fill={color} />
      {/* <Spotlight className="top-0 left-10 md:left-60 md:-top-20" fill="white" /> */}
      <div className="p-8 mt-20 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-8xl font-bold text-slate-900 dark:text-white">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg   text-black dark:text-white max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/courses">
          <button style={{ borderRadius: '1.75rem',borderWidth:'2px'}} className="transition-all duration-200   hover:font-semibold  bg-black border p-4 border-slate-850/50  dark:bg-white text-white dark:text-black  dark:border-white-200" >
            Explore courses
          </button>               
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
