import React from 'react';
import { Link } from "react-router-dom";


export default function TempNav() {
  return (
    <div className='flex justify-around py-6 bg-[#B89168] w-full '>
        <Link to={`/`} className={'underline'}>Home Page</Link>
        <Link to={`/test-page1`} className={'underline'}>Test Page 1</Link>
        <Link to={`/test-page2`} className={'underline'}>Test Page 2</Link>
        <Link to={`/test-page3`} className={'underline'}>Test Page 3</Link>
        <Link to={`/upload-products`} className={'underline'}>Add Product</Link>
    </div>
  )
}
