'use client'
import Link from 'next/link'
import React from 'react'
const CustomButton = (params) =>{
    return(
    
      <div className={`flex max-md:w-full md:w-1/5 m-auto my-8 rounded-lg border-2 ${params.clr} border-current h-14 items-center shadow-xl`}>
      <p className='ml-4'>{params.name}</p>
      <Link href={params.href} className='flex ml-auto mr-3'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className=" rotate-180"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
      </Link>
      </div>

    )
  }
export default CustomButton
