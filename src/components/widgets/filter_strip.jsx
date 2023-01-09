import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  everyScreen: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 10
    },
// superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
};

const categories = ['Furniture','Gadget', 'Fashion', 'Beauty', 'Accessories'];
const style = {

    containerDiv: {
        // display: 'flex'
    },
    carousel: {
        width: '100%',
    },
    indivButton: {
        padding: '3px 10px',
        width: 'fit-content',
        backgroundColor: '#FAF2E0',
        borderRadius: '20px',
        textAlign: 'center'
    },
    sortButton: {
        padding: '2px 10px',
        width: 'fit-content',
        backgroundColor: '#FAF2E0',
        borderRadius: '20px',
        textAlign: 'center',
        border: '1px solid #000000'
    }
}

export default function FilterStrip() {
  return (
    <div  style={style.containerDiv}>
        {/* <div>
            <Carousel responsive={responsive} style={style.carousel}>
                {
                    categories.map(e=>(
                        <div style={style.indivButton}>{e}</div>
                    ))
                    }
            </Carousel>
        </div> */}
        <Carousel responsive={responsive} style={style.carousel}>
            {
                categories.map(e=>(
                    <div style={style.indivButton}>{e}</div>
                ))
                }
        </Carousel>

        <div style={style.sortButton}>Sort By</div>
    </div>
    
  )
}