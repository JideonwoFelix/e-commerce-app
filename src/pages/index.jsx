import React from 'react';
import TempNav from '@layouts/TempNav';
import BestDealsSection from '@components/homeSections/best-deals';
import HomeSection from '@components/homeSections/home-section';
import FilterStrip from '@components/widgets/filter_strip';

export default function HomePage() {
  const tempItems = [
    {name: 'product 1', price: 3000},
    {name: 'product 2', price: 5500},
    {name: 'product 3', price: 2000},
    {name: 'product 4', price: 3400},
    {name: 'product 5', price: 9000},
  ]
  return (
    <>
        <TempNav/>
        <FilterStrip/>
        <BestDealsSection/>
        <HomeSection section_name={'New Arrival'} section_products={tempItems} />
        <div>New Arrivals</div>
        <div>Trending Now</div>
    </>
  )
}
