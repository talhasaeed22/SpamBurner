import React from 'react'

const ColourPalette = ({name, colorCode, textColor, color1, color2, gradient}) => {
  return (
    <>
    
        <div style={{color:textColor,backgroundImage:gradient  && `linear-gradient(90deg, ${color1} 0%, ${color2} 100%` ,backgroundColor:!gradient && colorCode}} className='d-flex p-4 my-3 flex-column'>
            <h6>{name}</h6>
            <span>{colorCode}</span>
        </div>
    </>
  )
}

export default ColourPalette