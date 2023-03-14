import React from 'react'

export default function FilterStripBox(props) {
    const style = {
    
        containerDiv: {
            // display: 'flex',
            marginTop: '30px',
            marginBottom: '30px',
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

  return (
    <div className='mx-10'>
        <div className='bg-[#B89168] rounded-lg p-4 mb-2'>
            <img src={props.category.img ? props.category.img : 'product-imgs/Default_Image_Thumbnail.png'} alt="" />
        </div>
        <div style={style.indivButton} className='mx-auto'>{props.category}</div>
    </div>
  )
}
