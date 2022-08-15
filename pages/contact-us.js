import React from 'react'
import styles from '../styles/Contact.module.css'
import buttonStyles from '../styles/Home/Preview.module.css'
import iconStyles from '../styles/Footer.module.css'
const contact = () => {
  return (
    <>
      <div className={`container-fluid ${styles.contactContainer} `}>
        <div className={styles.left}>
          <h1 className={styles.pHeading}>Contact Us</h1>
          <span className={`${styles.secHead} text-muted`}>Schedule a call today to find out why </span>
          <span className={`${styles.secHead} text-muted`}>SpamBurn™ is rated #1 for roofers.</span>
          <button className={`${buttonStyles.prevButton}  my-3`} style={{ background: 'none', backgroundColor: '#641fe9', width: 'fit-content' }}>Start My Free Trial Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
          <div className={styles.lower}>
            <div className="d-flex align-items-start gap-3">
              <i className="fa fa-envelope-o py-1" aria-hidden="true"></i>
              <div className='d-flex flex-column'>
                <h4>Company Email</h4>
                <span className='text-muted ' >info@spamburner.com</span>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3">
              <i className="fa fa-phone py-1" aria-hidden="true"></i>
              <div className='d-flex flex-column'>
                <h4>Phone Number</h4>
                <span className='text-muted ' >(863)-473-7169</span>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3">
              <i className="fa fa-map-marker py-1" aria-hidden="true"></i>
              <div className='d-flex flex-column'>
                <h4>Company Address</h4>
                <span className='text-muted ' >1643 Williamsburg Sq. Lakeland, FL 338803</span>
              </div>
            </div>
          </div>
          <div className={`${iconStyles.icons}`} style={{margin:'30px 36px'}}>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className={`fa fa-instagram ${iconStyles.borderIcon} `} style={{color:'#fff'}} aria-hidden="true"></i>
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>

            <div className='d-flex flex-column my-4'>
              <label htmlFor="name">Name*</label>
              <input className={styles.input} type="text" name="name" id="name" placeholder='Name' />
            </div>

            <div className='d-flex justify-content-between my-4' style={{gap:'30px'}}>

              <div className='d-flex flex-column ' style={{width:'70%'}}>
                <label htmlFor="email">Email*</label>
                <input className={styles.input} type="email" name="email" id="email" placeholder='Email' />
              </div>

              <div className='d-flex flex-column' style={{width:'70%'}}>
                <label htmlFor="phone">Phone*</label>
                <input className={styles.input} type="number" name="phone" id="phone" placeholder='Phone' />
              </div>

            </div>

            <div className='d-flex flex-column my-4'>
              <label htmlFor="business">Business Name*</label>
              <input className={styles.input} type="business" name="business" id="business" placeholder='Business Name' />
            </div>

            <div className='d-flex flex-column my-4'>
              <label htmlFor="webaddress">Website Address*</label>
              <input className={styles.input} type="webaddress" name="webaddress" id="webaddress" placeholder='www.' />
            </div>

            <div className='d-flex flex-column my-4'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={5} ></textarea>
            </div>
            <button className={`${buttonStyles.prevButton}  my-3`} style={{ width: 'fit-content', padding: '6px 45px', fontSize: 'medium' }}>Send</button>
          </form>
            <span style={{color:'#271d33', fontSize:'12px', fontWeight:'400', margin:'12px auto'}}>I agree to the SpamBurner <u style={{cursor:'pointer'}}>Terms of Service</u> and <u style={{cursor:'pointer'}}>Privacy Policy</u>.</span>
        </div>
      </div>
    </>
  )
}

export default contact