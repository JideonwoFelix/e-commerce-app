import React from 'react';
function Button(props) {
    const className= props.className + '';
  return (
    <div className={`${className}`}>
        {props.children}
    </div>
  )
}

export default Button;