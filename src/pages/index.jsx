import React from 'react';
// import TempNav from '@layouts/TempNav';
import Navbar from '@layouts/Navbar';
import BestDealsSection from '@components/homeSections/best-deals';
import HomeSectionCarousel from '@components/homeSections/home-section-carousel';
import HomeSectionGrid from '@components/homeSections/home-section-grid';
import FilterStrip from '@components/widgets/filter-strip';

export default function HomePage() {
  const tempItems = [
    {id: 1, name: 'product 1', price: 3000},
    {id: 2, name: 'product 2', price: 5500},
    {id: 3, name: 'product 3', price: 2000},
    {id: 4, name: 'product 4', price: 3400},
    {id: 5, name: 'product 5', price: 9000},
]

  return (
    <>
      <Navbar/>
      <FilterStrip/>
      <BestDealsSection/>
      <HomeSectionGrid section_name={'New Arrival'} section_products={tempItems} />
      <HomeSectionCarousel section_name={'Trending Now'} section_products={tempItems} />
    </>
  )
}
