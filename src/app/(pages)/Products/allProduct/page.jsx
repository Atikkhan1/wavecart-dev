'use client'


import Loading from '@/components/loading'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {
    let [data,setData] = useState([])
    let [loader,setloader] = useState(<Loading></Loading>)
    let [search,setsearch] = useState("")
    let [copyData,setCopydata] = useState([]) 

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
            setData(jsonData)
            setCopydata(jsonData)
            setloader('')
        }
        ssr()
        
    },[])
function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
  }
function searchAndFind(Object, toFind){
  let res = []
  for (let i = 0; i < Object.length; i++) {
      const element = Object[i].name.match(/\b\w+\b/g);
      for (let j = 0; j < element.length; j++) {
          if (toFind.toLowerCase()== element[j].toLowerCase()) {
              res.push(Object[i])
          }
      }

  }
  return res
}

    function handleSearch(){
      if (search != ""){
        let inputData = searchAndFind(data,search)
        let optimiseData = removeDuplicates(inputData)
        setCopydata(optimiseData)
      }else{
        setCopydata(data)
      }
        
      
    }
    

    function ProductBox(p){
        return(
        <div className='flex w-full md:w-96 my-3 p-2 rounded-xl h-36 '>
          <div  className='flex  justify-center w-2/6 items-start rounded-l border overflow-hidden' >
           <Link href={"https://wavecart.vercel.app/product/"+p._id}> <img src={p.image}  /></Link>
          </div>
          <div className='block w-4/6 border h-full p-1 px-2 overflow-hidden text-ellipsis'>
            <span className='text-nowrap w-full text-xl'>{`${p.name}`.toUpperCase()}</span>
            <h1 className="w-full flex text-red-500">Real Price:  <p className="mx-3 flex ml-auto">₹{p.price}</p> </h1>
            <h1 className="w-full flex text-green-500">margin Price <p className="mx-3 flex ml-auto"> ₹{Math.floor(p.price * p.margin)}</p></h1>
            <div className='flex mt-2 items-center justify-between'>
              <h1 className="w-16 italic font-bold text-gray-300">{p.subcategory}</h1>
              <button className="w-16 border border-white ">Edit</button>
              <a href={p.link}>

              <button className="w-16 border border-white ">Veiw</button>
              </a>
            </div>
          </div>
        </div>
        )
    }

  return (
    <div className='block w-full'>

    <div className='flex w-full h-12 bg-gray-900 shadow-md' >
      <input type="text" name="" id="" onChange={(e)=>setsearch(e.target.value)} className='bg-slate-700 m-2 rounded-md p-2' />
      <button onClick={()=>{handleSearch()}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mx-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
      <h1 className="flex mx-3 text-sm items-center">count : {copyData.length}</h1>
    </div>

    {loader}
    <div className='flex flex-wrap max-md:gap-x md:mx-auto'>
      {copyData.map((d)=>{
        return <ProductBox key={d._id + Math.random()*10} _id={d._id} name={d.name} category={d.category} subcategory={d.subcategory} image={d.image} price={d.price} margin={d.margin} description={d.description} link={d.link}  />
      })}
{/* <ProductBox name={"hjh"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eAqxljTteybiscbJymwvzUIgJKvl-zF6bw&s"}  /> */}
    </div>
    </div>
  )
}
