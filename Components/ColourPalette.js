import React from 'react'

const ColourPalette = ({name, colorCode, textColor, color1, color2, gradient}) => {
  return (
    <>
    
        <div style={{padding:'40px 40px 30px 40px', color:textColor,backgroundImage:gradient  && `linear-gradient(90deg, ${color1} 0%, ${color2} 100%` ,backgroundColor:!gradient && colorCode}} className='d-flex my-3 flex-column'>
            <h6 className='fw-bold fs-5'>{name}</h6>
            <span className='fs-5'>{colorCode}</span>
        </div>
    </>
  )
}

export default ColourPalette