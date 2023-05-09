import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FilterStripBox from './filter_strip_box';
import './style.css';
const responsive = {
//   everyScreen: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 0 },
//       items: 10
//     },
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

// const categories = ['Furniture','Gadget', 'Fashion', 'Beauty', 'Accessories'];
const categories = [
    {
        name: 'Accessories',
        thumbnail: 'product-imgs/hand-bag.png'
    },
    {
        name: 'Fashion',
        thumbnail: 'product-imgs/woman-bag.png'
    }, 
    {
        name: 'Gadget',
        thumbnail: 'product-imgs/iPhone-13.png'
    }, 
    {
        name: 'Electronics',
        thumbnail: 'product-imgs/tv.png'
    }, 
    {
        name: 'Furniture',
        thumbnail: 'product-imgs/chair.png'
    },
    {
        name: 'Beauty',
        thumbnail: ''
    },
];
const style = {

    containerDiv: {
        // display: 'flex',
        marginTop: '30px',
        marginBottom: '30px',
    },
    carousel: {
        width: '100%',
    },
    indivButton: {
        padding: '3px 10px',
        width: 'fit-content',
        backgroundColor: '#FAF2E0',
        borderRadius: '20px',
        textAlign: 'center'
    },
    sortButton: {
        padding: '2px 10px',
        width: 'fit-content',
        backgroundColor: '#FAF2E0',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0px 5px 10px #aaa'
        // border: '1px solid #000000'
    }
}

export default function FilterStrip() {
  return (
    <div  style={style.containerDiv} className='fiiter_strip'>
        <div>
            <Carousel 
                responsive={responsive} 
                style={style.carousel} 
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className=''
            >
                {
                    categories.map(e=>(
                        <FilterStripBox category={e} key={e}/>
                    ))
                }
            </Carousel>

        </div>
        <div className='w-full px-4 flex justify-between mt-4'>
            <div style={style.sortButton} className='flex items-baseline gap-2'>
                All Products
                <img src="icons/dropdown-caret.svg" alt="" />
            </div>
            <div style={style.sortButton} className='flex items-baseline gap-2'>
                Sort By
                <img src="icons/dropdown-caret.svg" alt="" />
            </div>
        </div>
    </div>
    
  )
}