'use client'
import React from 'react'
import router, { useRouter } from 'next/navigation'
import Link from 'next/link'


const Navbar = () => {
  let path = useRouter()
  let url = path.pathname
  return (
    <div className='flex w-full h-10 bg-green-700 items-center text-white' style={{height:"6vh"}}>

      <button onClick={()=>{path.back()}} >{url == '' ? '':<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-4"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>}</button>

      <h1 className='text-2xl mx-4 font-bold text-ellipsis w-48 overflow-hidden'>{url == ''? "Dashboard":url}</h1>

      <input type="text" className='flex w-40 h-8 ml-auto bg-slate-600 indent-2 text-l rounded-lg border-green-400 border-2 outline-blue-500 outline-8' placeholder='search ...' />
      
      <Link href={''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mx-4"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></Link>
    </div>
  )
}

export default Navbar
