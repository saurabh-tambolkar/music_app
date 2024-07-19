import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingWebinars() {
  
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-indigo-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center space-y-4'>
          <h2 className='text-base text-teal-700 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
          <p className='text-4xl text-center text-slate-900 dark:text-white font-bold'>Enhance your musical journey</p>
        </div>
        <div className='mt-10'>
        <HoverEffect items={featuredWebinars} />
        </div>
        <div className='mt-10 text-center'>
        <Link href="/" className="">
          <button style={{ borderRadius: '1.75rem',borderWidth:'2px'}} className="transition-all duration-200   hover:font-semibold  bg-black border p-4 border-slate-850/50  dark:bg-white text-white dark:text-black  dark:border-white-200" >
          View all Webinars
          </button>               
        </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
