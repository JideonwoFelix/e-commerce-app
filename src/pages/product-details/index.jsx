import ProductDescription from '@components/ProductDetails/ProductDescription'
import ProductImage from '@components/ProductDetails/ProductImage'
import Navbar from '@layouts/Navbar'
import React from 'react'

export default function ProductDetails() {
  return (
    <>
        <Navbar/>
        <div className='grid grid-cols-2 gap-10 w-full p-4 mt-8'>
            <ProductImage/>
            <ProductDescription/>
        </div> 
    </>
  )
}
