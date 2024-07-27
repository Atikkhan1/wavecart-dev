'use client'

import { NextURL } from 'next/dist/server/web/next-url'
import React, { useEffect, useState } from 'react'

export default function page() {
    let [data,setData] = useState([])

    useEffect(()=>{
        let ssr = async()=>{
            let response = await fetch('/api/DB',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    collection:"products"
                }),
            })
            let jsonData = await response.json()
            console.log(jsonData)
            setData(jsonData)
        }

        ssr()
    },[])

    

    function ProductBox(p){
        return(
        <div className='flex w-11/12 md:w-96 mx-auto my-3 p-2 rounded-xl h-36 border-2'>
          <img src={p.image} alt="h" className='border h-full w-2/6 rounded-l ' />
          <div className='block w-4/6 h-full border p-1 overflow-hidden text-ellipsis'>
            <span className='text-nowrap w-full text-xl'>{`${p.name}`.toUpperCase()}</span>

          </div>
        </div>
        )
    }

  return (
    <div className='w-full '>
      {data.map((d)=>{
        return <ProductBox name={d.name} image={d.image}  />
      })}

    </div>
  )
}
