import React from 'react';
// import TempNav from '@layouts/TempNav';
import ProductImage from '@components/ProductDetails/ProductImage';
import Navbar from '@layouts/Navbar';
import ProductDescription from '@components/ProductDetails/ProductDescription';

export default function TestPage1() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      
       <div className='grid grid-cols-2 gap-10 w-full p-4 mt-8'>
       <ProductImage/>
        <ProductDescription/>
        </div> 
        
    </>
  )
}
