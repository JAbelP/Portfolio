import React from 'react'
import Link from 'next/link'
const joke = () => {
  return (
    // sm:top-1/2 sm:left-2/3 
    <div className='fixed  sm:top-1/2 sm:left-2/4 ' >
      <p>
        Under Construction
        In the mean time look at my <Link className='underline underline-offset-4' href={'https://github.com/JAbelP?tab=repositories'}>GitHub!</Link>
      </p>
    </div>
  )
}

export default joke