import React from 'react';
// import TempNav from '@layouts/TempNav';
import Navbar from '@layouts/Navbar';
// import BestDealsSection from '@components/homeSections/best-deals';
import HomeSectionCarousel from '@components/homeSections/home-section-carousel';
import HomeSectionGrid from '@components/homeSections/home-section-grid';
import FilterStrip from '@components/widgets/filter-strip';
import BannerSection from '@components/homeSections/banner';

export default function HomePage() {
  const tempItems = [
    {id: 1, name: 'product 1', price: 3000, img: 'product-imgs/socket-protector.jpg'},
    {id: 2, name: 'product 2', price: 5500, img: 'product-imgs/vase.jpg'},
    {id: 3, name: 'product 3', price: 2000, img: 'product-imgs/lamp.jpg'},
    {id: 4, name: 'product 4', price: 3400, img: 'product-imgs/drone.jpg'},
    {id: 5, name: 'product 5', price: 9000, img: 'product-imgs/Default_Image_Thumbnail.png'},
    {id: 6, name: 'product 5', price: 9000, img: 'product-imgs/Default_Image_Thumbnail.png'},
    {id: 7, name: 'product 5', price: 9000, img: 'product-imgs/Default_Image_Thumbnail.png'},
    {id: 8, name: 'product 5', price: 9000, img: 'product-imgs/Default_Image_Thumbnail.png'},
]

  return (
    <>
      <Navbar/>
      <BannerSection/>
      <FilterStrip/>
      {/* <BestDealsSection/> */}
      <HomeSectionGrid section_name={'New Arrival'} section_products={tempItems} />
      <HomeSectionCarousel section_name={'Trending Now'} section_products={tempItems} />
    </>
  )
}
