import React from 'react';
import ProductBox1 from '@components/widgets/product-box/productBox1';


export default function HomeSection(props) {
  return (
    <section>
        <div>{props.section_name}</div>
        <div className='flex flex-wrap'>
            {props.section_products.map(item =>(
                <ProductBox1 item={item} widthclass='w-1/2 md:w-1/4'/>
            ))}
        </div>
    </section>
  )
}
