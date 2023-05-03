import React, {useState} from 'react';
import Button from '@components/UI/Button';

const ProductDescription = ()=>{
    const [count,setCounter] = useState(0);

    const increment = ()=>{
        setCounter((prevState)=>{
            return +prevState + 1;
        })
    }

    const decrement = ()=>{
        setCounter((prevState)=>{
            if(prevState <= 0){
            return 0;
            }else{
            return +prevState - 1;
            }
        })
    }
  return (
    <div className='bg-[#FAF2E0] p-10'>
        <div>
            <h2 className='bg-[#00000] font-semibold text-[20.41px] mb-2'>Airpods Max</h2>
            <p className='w-[360px] font-normal text-[13.02px] leading-[15.87px]'>High-fidelity audio combined with active noise cancellation to deliver an unparalleled listening experience</p>
            <hr/>
        <div className='m-5'>
            <h4 className='text-[#000000] font-bold'>600,000</h4>
            <p>In Stock</p>
            <small>Shipping fee Applies</small>
        </div>
        <hr/>
        <div className='m-5'>
            <h5 className="text-[#000000] font-bold">Choose a Color</h5>
            <div className='flex md:flex gap-5'>
                <img src="Group 3.png" alt="" style={{width: '40px', height: '40px'}}/>
                <img src="Group 4.png" alt="" style={{width: '40px', height: '40px'}}/>
                <img src="Group 5.png" alt="" style={{width: '40px', height: '40px'}}/>
                <img src="Group 6.png" alt="" style={{width: '40px', height: '40px'}}/>
            </div>
        </div>
        <hr/>
            <div className='m-5'>
                <button className='cursor-pointer py-[1rem] px-[2rem] border-2 border-[#D9D9D9] bg-[#D9D9D9] text-black rounded-[21.33px] mr-[1rem]'>
                    <span onClick={decrement} className="p-4">-</span>
                    {count}
                    <span onClick={increment} className="p-4">+</span>
                </button>
                <div className='flex md:flex mt-10'>
                <Button className="cursor-pointer py-[1rem] px-[3rem] border-2 border-[#4C2B18] bg-[#4C2B18] text-white rounded-[21px] mr-[1rem]">Buy Now</Button>
                <Button className="cursor-pointer py-[1rem] px-[2rem] border-2 border-[#4C2B18] bg-[#ffffff] text-black rounded-[21px] mr-[1rem]">Add to Cart</Button>
            </div>
        </div>
        
        <hr/>

        <div className='m-5'>
            <h4 className='text-[#000000] font-bold mb-2'>Promotions</h4>
            <div className='flex md:flex'>
                <img src='Delivery.png' alt=""  style={{width: '20px', height: '20px'}}/>
                <p className=' ml-3 '>Free Delivery for first time shoppers</p>
            </div>
            <div className='flex md:flex py-5'>
                <img src='Return.png' alt="" style={{width: '20px', height:'20px'}}/>
                <p className='ml-3'>Free Delivery for first time shoppers</p>
            </div>
        </div>
        
        <hr/>

        <div className='grid grid-cols-2 gap-32 font-bold text-[23.61px] leading-[28px] text-black'>
            <h2>Customer Feedback</h2>
            <h2>Ratings</h2>  
        </div>
        <hr/>
        <div className='grid grid-cols-2 gap-32 py-4'>
            <div>
                <span className='flex'>
                    <img src="User.png" alt='' style={{width: '29px', height:'29px'}}/>
                    <h4 className='inline ml-2'>Felix</h4>
                </span>
                <p>February 15, 2023</p>
                <p>The Airpods exceeded my expections, Thank you for delivering as promised</p>
            </div>
            <div>
                <p>@@@</p>
            </div>
        </div>
        <hr/>
        <div className='grid grid-cols-2 gap-32 py-4'>
            <div>
                 <span className='flex'>
                    <img src="User.png" alt='' style={{width: '29px', height:'29px'}}/>
                    <h4 className='inline ml-2'>Felix</h4>
                </span>
                <p>February 15, 2023</p>
                <p>The Airpods exceeded my expections, Thank you for delivering as promised</p>
            </div>
            <div>
                <p>@@@</p>
            </div>
        </div>
        <hr/>
        <div className='grid grid-cols-2 gap-32 py-4'>
            <div>
                <span className='flex'>
                        <img src="User.png" alt='' style={{width: '29px', height:'29px'}}/>
                        <h4 className='inline ml-2'>Felix</h4>
                </span>
                <p>February 15, 2023</p>
                <p>The Airpods exceeded my expections, Thank you for delivering as promised</p>
            </div>
            <div>
                <p>@@@</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDescription;
