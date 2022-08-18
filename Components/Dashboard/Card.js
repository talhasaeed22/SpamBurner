import React from 'react'
import styles from '../../styles/Dashboard/Dashboard.module.css'
const Card = ({image}) => {
  return (
    <>
        <div className={` d-flex flex-column p-5 bg-white border-radius-3 ${styles.carditem} `} style={{boxShadow: '0px 5px 7px 0px rgb(114 114 114 / 25%)', height:'45vh'}}>
            <img src={image} className={'img-fluid'} width={100} height={100} />
            <span> <i>“Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed diam nonummy nibh euismod tinci dunt ut laoreet magna aliquam erat.”</i> </span>
            <div className='d-flex flex-column mt-4'>
                <span className='fw-bold fs-6'>John Smith</span>
                <span >Office Title, CEO</span>
            </div>
        </div>
    </>
  )
}

export default Card