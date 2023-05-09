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
        <div className='w-[200px]'>
            <div className='bg-[#B89168] rounded-lg p-2 mb-2 w-[200px] h-[200px]'>
                <img src={props.category.thumbnail ? props.category.thumbnail : 'product-imgs/Default_Image_Thumbnail.png'} alt=""  className='w-full'/>
            </div>
            <div style={style.indivButton} className='mx-auto flex items-baseline gap-2'>
                <div>{props.category.name}</div>
                <img src="icons/dropdown-caret.svg" alt="" />
            </div>
        </div>
    </div>
  )
}
