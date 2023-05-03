import React from 'react';
import { Link } from 'react-router-dom';
import formatToCurrency from 'src/hooks/currency-formatter';

// export default function ProductBox1() {
//   return (
//     <div>productBox1</div>
//   )
// }
class ProductBox1 extends React.Component {
    render() {
      return (
        <Link to={'/product-details'} className={`p-4 ${this.props.widthclass}`}>
            <div>
                <img alt={this.props.item.name} src={this.props.item.img ? this.props.item.img : 'product-imgs/Default_Image_Thumbnail.png'}/>
                <div className='font-bold'>{this.props.item.name}</div>
                <div className=''>{formatToCurrency('N', this.props.item.price)}</div>
            </div>
        </Link>
        );
    }
  }

export default ProductBox1;