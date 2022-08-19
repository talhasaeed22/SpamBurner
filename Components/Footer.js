import React from 'react'
import styles from '../styles/Footer.module.css'
import buttonStyles from '../styles/Home/Preview.module.css'
import { useRouter } from 'next/router'


const Footer = () => {
    const router = useRouter();
    return (
        <>
            <div className={`contianer-fluid ${styles.mainContainer}`}>
                <div className={`container ${styles.innerContainer}`}>
                    <div className={`${styles.left}`}>
                        <div className={styles.col}>
                            <span className={styles.heading}>Spamburner™</span>
                            <span className={styles.items} onClick={()=>{router.push('/home')}}>Home</span>
                            <span className={styles.items} onClick={()=>{router.push('/the-dashboard')}}>The Dashboard</span>
                            <span className={styles.items} onClick={()=>{router.push('/features')}}>Features</span>
                            <span className={styles.items} onClick={()=>{router.push('/how-it-works')}}>How it Works</span>
                            <span className={styles.items}>Pricing</span>
                        </div>
                        <div className={styles.col}>
                            <span className={styles.heading}>Resources</span>
                            <span className={styles.items} onClick={()=>{router.push('/branding-resources')}}>Enterprise</span>
                            <span className={styles.items} onClick={()=>{router.push('/blog-index')}}>Blog</span>
                            <span className={styles.items} onClick={()=>{router.push('/faqs')}}>FAQs</span>
                            
                        </div>
                        <div className={styles.col}>
                            <span className={styles.heading}>Company</span>
                            <span className={styles.items}>Schedule Dem</span>
                            <span className={styles.items}>About</span>
                            <span className={styles.items} onClick={()=>{router.push('/contact-us')}}>Contact us</span>
                            
                        </div>
                    </div>

                    <div className={` ${styles.right}`}>
                        <div className={styles.spanheading}>
                            <span>It's safe. It's easy.</span>
                            <span>It's <span style={{fontSize:'34px'}}>SpamBurner™</span></span>
                        </div>
                        <button className={`${buttonStyles.prevButton} w-auto`}>Start My Free Trial Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        <div className={styles.icons}>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            <i className={`fa fa-instagram ${styles.borderIcon} `} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-between pb-4" style={{padding: '0% 3%'}}>
                    <div className={styles.license}>
                        <span><span className={styles.poinerSpan}>License Agreement</span> | <span className={styles.poinerSpan}>Terms of Service</span> | <span className={styles.poinerSpan}> Privacy Policy</span> | <span className={styles.poinerSpan}>Cookies Policy</span> | <span className={styles.poinerSpan}> Disclaimer</span></span>
                    </div>
                    <div className={styles.license}>
                        <span>All Rights Reserved © All Rights Reserved Web Dev Group Ltd. Liability Co.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer