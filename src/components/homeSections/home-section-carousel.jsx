import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductBox1 from '@components/widgets/product-box/productBox1';

const responsive = {
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
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const tempItems = [
    {id: 1, name: 'product 1', price: 3000},
    {id: 2, name: 'product 2', price: 5500},
    {id: 3, name: 'product 3', price: 2000},
    {id: 4, name: 'product 4', price: 3400},
    {id: 5, name: 'product 5', price: 9000},
]

export default function HomeSectionCarousel(props) {

  
  return (
    <section>
      <div>{props.section_name}</div>
      <Carousel 
        responsive={responsive} 
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className=''
      >
        {tempItems.map(item =>(
          <ProductBox1 item={item} key={item.id}/>
        ))}
      </Carousel>
    </section>
  )
}


