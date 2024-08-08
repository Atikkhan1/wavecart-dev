'use client'

import Link from 'next/link'
import  { useParams, useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
const Sidebar = () => {
  let router = useRouter()
  let path = usePathname().split("/")[1]
  
  console.log(path)

  let Option = (params) =>{


    return(
    <Link href={params.href} className={ ` flex w-full h-fit text-gray-300 md:px-1 py-2 text-2xl hover:opacity-75 max-md:pl-3 ` + [params.href == "/"+path ? " bg-green-700 rounded-md border-green-400":""]} >
     
        <p className='flex size-8 mr-4 md:mx-2 translate-y-0.5'>{params.svg}</p>
       <h1 className='text-xl max-md:hidden'>{params.title}</h1>
      
      </Link>)
  } 
  


  return (
    <div className=' block w-52 p-1 bg-zinc-950 border-r border-neutral-800 shadow-lg justify-center max-md:w-16 overflow-hidden' style={{height:"94vh"}}>


      <Option href={'/'} className={"border-l"} title={'Dashboard'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>}/>


      <Option href={'/Products'} title={'Products'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>}/>

      <Option href={'/Orders'} title={'Orders'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>} />

      <Option href={'/Accounts'} title={'Accounts'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}/>



    </div>
  )
}

export default Sidebar
