import Image from 'next/image'
import React from 'react'
import Programming from './programming'
import {  Linkedin, Envelope,  } from "./icons/"

const Sidebar = ({data}) => {
  const {name, role, education, contactLinks} = data
  return (
    <div className = 'bg-black flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
        <div className='text-white flex flex-col  items-center'>
        <Image 
          // priority
          width={ 300 }
          height={ 300 }
          src='/images/ProfilePicture.png'
          className='rounded-full h-full'

        />
            <h1 className='mb-2'>
                {name}
            </h1>
            <h2 className='mb-2'>{role}</h2>
            {education.map((paragraph,i) => (
              <p  className='flex mb-4 mx-6' > {education[i]}</p>
            ))}
            
            <Programming />

            <div className='text-white text-center mb-2 mt-4 sm:mt-8'>
              <h3 className='mb-2'> CONTACT ME</h3>
              <div className='flex flex-row justify-center gap-2'>
              <button>
                <a className='iconsContactme' href={contactLinks?.[0]} aria-label = { "Email Link"}>
                  <Envelope />
                </a>
                </button>
                <button>
                <a className='iconsContactme' href={contactLinks?.[1]} aria-label = { "LinkedIn Link"}>
                  <Linkedin />
                </a>
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar