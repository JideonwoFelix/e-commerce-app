import React from 'react'

const ProductImage =(props)=> {
  return (
    <div className='ml-5'>
         <div className='p-5 bg-[#FAF2E0] h-[630px] mb-8'>
            <div className='max-w-[474px] h-[533px] mx-auto p-5'>
                <img src='Airpods Max.png' alt=''/>
              </div>
          </div>

          <div className='grid grid-cols-3 gap-4 mt-10'>
              <div className='bg-[#FAF2E0] p-5 drop-shadow-lg'>
                <img alt='' src='ash.png' width={159} height={160}/>
              </div>
              <div className='bg-[#FAF2E0] p-5 drop-shadow-lg'>
                <img alt='' src='black.png' width={159} height={160}/>
              </div>
              <div className='bg-[#FAF2E0] p-5 drop-shadow-lg'>
                <img alt='' src='blue.png' width={159} height={160}/>
              </div>
          </div>
          <div className='bg-[#FAF2E0] py-10 mt-5'>
            <h3 className='p-5 font-bold'>Product Details</h3>
            <hr/>
            <ul className='p-5 m-5 list-disc list-outside font-medium'>
                <li> High-fidelity audio.</li>
                <li> Active Noise Cancellation with Transparency mode.</li>
                <li> Spatial audio for theater‑like. sound that surrounds you.</li>
                <li> Stunning design with an exceptional fit</li>
                <li> Crafted with acoustically engineered memory foam</li>
            </ul>
          </div>
    </div>
    
   
  )
}

export default ProductImage;