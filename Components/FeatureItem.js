import React from 'react'
import styles from '../styles/Home/Features.module.css'
const FeatureItem = ({source, heading, para}) => {
  return (
    <>
        <div className='d-flex flex-column w-50'>
            <img src={source} className={'img-fluid'} width={50}  />
            <h2 className={styles.primaryHeading}>{heading}</h2>
            <span className={styles.primarySpan}>{para}</span>
        </div>
    </>
  )
}

export default FeatureItem