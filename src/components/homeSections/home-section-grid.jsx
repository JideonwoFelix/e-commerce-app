import React from 'react';
import ProductBox2 from '@components/widgets/product-box/productBox2';


export default function HomeSectionGrid(props) {
  return (
    <section className='mx-10'>
        <div className='border-l-4 border-black pl-2 mb-4'>{props.section_name}</div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            {props.section_products.map(item =>(
                <ProductBox2 item={item} widthclass='' key={item.id}/>
            ))}
        </div>
    </section>
  )
}
