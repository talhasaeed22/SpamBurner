import React from 'react'
import styles from '../styles/PreFooter.module.css'
import buttonStyles from '../styles/Home/Preview.module.css'
import { useRouter } from "next/router";

const PreFooter = ({heading, para, secondaryHeading, secondaryButton, buttonText, lastPara}) => {
  const router = useRouter();
  return (
    <>
      <div className={` ${styles.footercontainer} ${router.pathname === '/features' ? styles.simpleBg : styles.roundedBg} `} >
        <div className={`container d-flex justify-content-between gap-5 ${styles.footerInner} `}>
          <div className={` ${styles.left} `}>
            <h1 className={styles.heading}>{heading}</h1>
            {secondaryHeading !== '' && <h2>{secondaryHeading}</h2>}
            <span >{para}</span>
            <div className='d-flex gap-4 mt-4'>
              <button className={buttonStyles.prevButton}>{buttonText} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
              {secondaryButton && <button className={`${buttonStyles.simpleButton} text-light `}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>}
            </div>
            {lastPara !== '' && <div className='px-3'>
              <span >{lastPara}</span>
            </div>}
          </div>
          <div className="right w-100">
            <img className='img-fluid' src={'/Images/Screenshot.png'} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PreFooter