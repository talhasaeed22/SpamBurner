import React from 'react'
import styles from '../styles/PreFooter.module.css'
import Image from 'next/future/image'
import buttonStyles from '../styles/Home/Preview.module.css'
import whitetext from '../public/Images/Brand/SpamButner White text.svg'
import screenshot from '../public/Images/Screenshot.png'
const PreFooter = () => {
  return (
    <>
      <div className={` ${styles.footercontainer}`} >
        <div className={`container d-flex justify-content-between gap-5 ${styles.footerInner} `}>
          <div className={` ${styles.left} `}>
            {/* <Image src={whitetext} width={250}  /> */}
            <h1 className={styles.heading}>SpamBurner™</h1>
            <h2>The only comprehensive solution for eliminating website spam.</h2>
            <span >Easy setup — no technical skills required or hidden costs</span>
            <div className='d-flex gap-4 mt-4'>
              <button className={buttonStyles.prevButton}>Start My Free Trial Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
              <button className={`${buttonStyles.simpleButton} text-light `}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="right w-100">
            <Image className='img-fluid' src={screenshot} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PreFooter