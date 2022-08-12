import React from 'react'
import Image from 'next/future/image'
import styles from '../styles/Features.module.css'
const FeatureItem = ({source, heading, para}) => {
  return (
    <>
        <div className='d-flex flex-column w-50'>
            <Image src={source} className={'img-fluid'} width={50}  />
            <h2 className={styles.primaryHeading}>{heading}</h2>
            <span className={styles.primarySpan}>{para}</span>
        </div>
    </>
  )
}

export default FeatureItem