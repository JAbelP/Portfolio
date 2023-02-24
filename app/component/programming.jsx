"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Programming = () => {
  const currentURL = useRouter();
  console.log(currentURL);

  return (
    <div className='flex flex-col rounded-full bg-yellow text-black w-50 justify-center drop-shadow-[0px_0px_35px_rgba(255,0,0,0.25)]'>

        {/* //I want it to be a white square that takes up only what it needs to take up */}
        {/* <!-- component --> */}
    <Link href="/joke"> 
            <button className="group flex items-center bg-transparent p-2 px-9 text-xl font-bold font-mono tracking-widest text-black">
                <span className="relative pb-1 text-black after:transition-transform after:duration-400 
                after:ease-out after:absolute after:bottom-0 after:right-0 after:block after:h-[2px] after:w-full after:origin-bottom-right 
                after:scale-x-0 after:bg-black after:content-[''] after:group-hover:origin-bottom-left
                after:group-hover:scale-x-100">Projects</span>
                {/* <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" class="-translate-x-1 
                fill-yellow
                fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-x-105 group-hover:fill-black">
                <path transform="translate(15)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" 
                data-name="Path 10" id="Path_10"></path>
                </svg> */}
            </button>
    </Link>

        
    </div>
  )
}

export default Programming