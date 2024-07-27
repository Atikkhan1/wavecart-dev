import CustomButton from '@/components/CustomButtton'
import Link from 'next/link'
import React from 'react'

const Products = () => {

  return (
    <div className='md:flex w-full md:gap-4'>
      <CustomButton href={'/Products/allProduct'} name='View All Product' clr='text-pink-400'></CustomButton>
      <CustomButton href={'/Products/addProduct'} name='Add M Product' clr='text-blue-400'></CustomButton>
      <CustomButton href={'/Products/createProduct'} name='Create Product' clr='text-green-500'></CustomButton>
      <CustomButton href={'/Products/deleteProduct'} name='Delete Product' clr='text-red-400'></CustomButton>
      <CustomButton href={'/Products/updateProduct'} name='Update Product' clr='text-yellow-400'></CustomButton>
    </div>
  )
}

export default Products
