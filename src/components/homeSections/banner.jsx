import React from 'react'

export default function BannerSection() {
  return (
    <div className='flex flex-col-reverse md:flex-row text-center md:text-left w-full justify-between items-center bg-gradient-to-b from-[#faf2e0] to-[#ffffff] px-10'>
        <div>
            <div className='bg-[#b89168] w-fit p-4 rounded-full text-5xl mx-auto md:mx-0 mt-5 md:mt-0'>Deals</div>
            <div className='text-4xl'>Shop New and <br/>Trending Products</div>
        </div>
        <img src="banners/banner-img-1.png" alt="" />
    </div>
  )
}
