import React from 'react'
import './01-home-section-styles.css'

export default function Banner() {
  return (
    <div className='flex w-full justify-between items-center p-10 box-border home_sect-bg-gradient-theme-1'>
        <div className=''>
            <div className='text-4xl'>DEALS</div>
            <div className='text-2xl shadow-md rounded-3xl py-3 px-6 my-2'>UP TO 75% OFF</div>
            <div className=''>GADGETS, APPLIANCES AND <br/> AND FASHION</div>
        </div>
        <img src='./banner-image-1.png' alt='banner image' width={300}/>
    </div>
  )
}
