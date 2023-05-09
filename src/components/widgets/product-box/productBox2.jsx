import React from 'react';
import { Link } from 'react-router-dom';
import formatToCurrency from 'src/hooks/currency-formatter';

// export default function ProductBox1() {
//   return (
//     <div>productBox1</div>
//   )
// }
class ProductBox2 extends React.Component {
    render() {
      return (
        <Link to={'/product-details'} className={`bg-[#faf2e0]`}>
            <div className={`p-4`}>
                <img alt={this.props.item.name} src={this.props.item.img ? this.props.item.img : 'product-imgs/Default_Image_Thumbnail.png'} className='rounded-[20px] mb-2'/>
                <div className='font-bold'>{this.props.item.name}</div>
                <div className=''>&#8358;{formatToCurrency('', this.props.item.price)}</div>
            </div>
              <div className='bg-[#4c2b18] rounded-tl-[25px] rounded-br-[25px] text-center p-4 font-bold text-white'>Add to Cart</div>
        </Link>
        );
    }
  }

export default ProductBox2;