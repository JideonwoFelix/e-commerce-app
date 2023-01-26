import React from 'react';
import TempNav from '@layouts/TempNav';
import BestDealsSection from '@components/homeSections/best-deals';

export default function HomePage() {
  return (
    <>
        <TempNav/>
        <div>Home Page</div>
        <BestDealsSection/>
        <div>New Arrivals</div>
        <div>Trending Now</div>
    </>
  )
}
