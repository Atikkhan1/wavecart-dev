"use client"

import React, { useState } from 'react'
import Loading from '../../../../../loading';
export default function addProduct(){

  let CategoryObject = [
    {category:"clothes", subcategory:["","tshirts","shirts","hoodies","track-pants","jeans","palazzo"]},
    {category:"watch", subcategory:["","smartwatch","menswatch","ladieswatch","kidswatch"]},
    {category:"footwear", subcategory:["","sports-shoes","boots","sandels","flip-flop","slipper","heels","casual"]},
    {category:"electronic", subcategory:["","earbuds","lights","cables","mobile-chargers"]},
    {category:"toys", subcategory:["","soft-toys","vehicles-toys","anime-toys","kid-toys"]},
  ]
  const [data,setData] = useState({
    link:"",
    category:"clothes",
    subcategory:"",
    margin:"1.3"
  })
  function getIndex(FindC){
    let getSubindex ;
    for (let i = 0; i < CategoryObject.length; i++) {
        if (CategoryObject[i].category == FindC){
            getSubindex = i
        }
       
    }
    return getSubindex
}
let [pasteLink,setPastelink]= useState("");


let [subCategoryArray, setSub] = useState(CategoryObject[0].subcategory)
function changeOption(e){
  data.category= e.target.value
  setSub(CategoryObject[getIndex(e.target.value)].subcategory)
}

  const [message,setmessage] = useState("fill the field please")
  
  const handleSearch = async(e) => {
    data.link = pasteLink
    console.log(data)
    e.preventDefault();
    setmessage(<Loading></Loading>)
    let response = await fetch(`/api/Products/addProduct`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
          data:data
        }),
    })
      let jsonResponse = await response.json()
      console.log(jsonResponse)
      setmessage(jsonResponse)
    setPastelink('')
};
  

  return (
    
<div className= 'w-full md:w-2/3 border-white border-2 p-4 mx-auto h-fit'>
    <div className='flex'>

    <input type="text" id='link-input' value={pasteLink} onChange={(e)=>{data.link = e.target.value}} className='bg-slate-600 w-3/4 h-14 p-2 outline-blue-500' placeholder='link' />


    <button className='bg-slate-600 w-1/4 h-14 border ml-auto' onClick={async()=>{setPastelink(await navigator.clipboard.readText()), console.log(pasteLink)}}>paste</button>
    
    </div>
  <select onChange={(e)=>{changeOption(e)}}  className='bg-slate-600 w-full h-14 indent-4 outline-blue-500 mt-4' >
    {CategoryObject.map((c)=>{
      return(
        <option key={c.category} value={c.category}>{c.category}</option>
      )
    })}
  </select>


  <select onChange={(e)=>{data.subcategory=e.target.value}}  className='bg-slate-600 w-full h-14 indent-4 outline-blue-500 mt-4' >
    {subCategoryArray.map((c)=>{
      return(
        <option key={c} value={c}>{c}</option>
      )
    })}
  </select>
  <select onChange={(e)=>{data.margin=e.target.value}}  className='bg-slate-600 w-full h-14 indent-4 outline-blue-500 mt-4' >
    
    <option value="1.3">1.3x</option>
    <option value="1.4">1.4x</option>
    <option value="1.5">1.5x</option>
    <option value="1.6">1.6x</option>
    <option value="1.7">1.7x</option>
    <option value="1.8">1.8x</option>
  </select>

    <div className='mx-auto my-2'>{message}</div>
    <button type="submit" id='link-input'  onClick={(e)=>{handleSearch(e)}} className='bg-green-500 w-full h-14 ' placeholder='category' >Add To Products</button>

</div>

    
  )
}


