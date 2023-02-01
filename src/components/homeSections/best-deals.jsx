import React from 'react';
import ProductBox1 from '@components/widgets/product-box/productBox1';

const tempItems = [
    {name: 'product 1', price: 3000},
    {name: 'product 2', price: 5500},
    {name: 'product 3', price: 2000},
    {name: 'product 4', price: 3400},
    {name: 'product 5', price: 9000},
]

export default function BestDealsSection() {
  return (
    <section>
        <div className=''>Best Deals</div>
        <div className='flex home_sect-bg-gradient-theme-1 p-10'>
            {tempItems.map(item =>(
                <ProductBox1 item={item}/>
            ))}
        </div>
    </section>
  )
}
