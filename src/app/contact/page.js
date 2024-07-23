'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function page() {

  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState(false)

  const router = useRouter()

  const emptyForm=()=>{
    setEmail("");
    setMessage("");
    setError(false);
  }

  const handleSendMessage = async() =>{
    if(!email || !message){
      console.log("enter all the fields")
      // alert("enter all the fields")
      setError(true)
    }
    else{
      let data = await fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,message})
      })
      let res = await data.json();
      if(res.success!=true){
        alert("cant send message right now")
      }
      else{
        alert("message sent")
        setEmail("");
        setMessage("");
        router.push('/')
      }
    }
  }

  return (
    <div className='min-h-screen w-full py-12 pt-36 bg-white dark:bg-black flex flex-col items-center'>
      <h1 className='text-6xl text-center mt-12 font-bold text-black dark:text-white'>Contact Us</h1>
      <div className='pt-20 mx-4 flex flex-col space-y-4 items-center w-full'>
        <input placeholder='Enter your email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='bg-white border border-slate-800 text-black p-3 font-semibold rounded dark:text-white dark:bg-slate-900 w-96 sm:w-3/6'/>
        {
            error &&
          <p className='text-red-600 mt-0 text-xs font-semibold  '>enter valid email</p>
        }

        <textarea cols={4} rows={3} unselectable='false' placeholder='Enter your message' name='message' value={message} onChange={(e)=>setMessage(e.target.value)} className='bg-white border border-slate-800 text-black p-3 font-semibold rounded w-96 sm:w-3/6 dark:text-white dark:bg-slate-900 '/>
          {
            error &&
        <p className='text-red-600 mt-0 text-xs font-semibold'>enter valid message</p>
          }

        <div className='flex flex-row space-x-4'>
        <button className='bg-black dark:bg-white px-5 p-3 rounded-full flex flex-row items-center space-y-2' onClick={emptyForm}>
            <span className='text-md font-semibold text-white dark:text-black'>
                Empty form
            </span>
                
        </button>
        <button className='bg-black dark:bg-white px-5 p-3 rounded-full flex flex-row items-center space-y-2' onClick={handleSendMessage}>
            <span className='text-md font-semibold text-white dark:text-black'>
                Send
            </span>
                
        </button>
        </div>
      </div>
    </div>
  )
}

export default page
