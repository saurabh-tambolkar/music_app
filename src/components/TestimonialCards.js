'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const musicSchoolTestimonials = [
    {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
  ];


function TestimonialCards() {
  return (
    <div className=' h-[25rem] mt-20 w-full dark:bg-black'>
        <h2 className="text-4xl text-center  text-slate-900 dark:text-white font-bold">Hear our Harmony : Voice of success</h2>
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
        />
    </div>
    </div>
  )
}

export default TestimonialCards
