import React from 'react'
import step from '../public/Images/Step .svg'
import step3 from '../public/Images/Step _1.svg'
import step2 from '../public/Images/Brand/SpamburnerIcon.svg'
import stepgif from '../public/Images/Step.gif'
import styles from '../styles/WorkingProcedure.module.css'
import Image from 'next/future/image'

const WorkingProcedure = () => {
    return (
        <>
            <div className='text-center mb-5'>
                <h1 className={styles.pHeading}>How does it work?</h1>
            </div>
            <div className="container d-flex">
                <div className={styles.workingBox} id={styles.box1}>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h1>01</h1>
                        <Image className={`${styles.borderImg} img-fluid`} src={step} alt="" width={100} height={100} />
                    </div>
                    <div>
                        <h2>Signup <i className={`fa fa-long-arrow-right ${styles.arrow}`} aria-hidden="true"></i></h2>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='text-muted'>Sign up for your 14-day </span>
                        <span className='text-muted'>free trial</span>
                    </div>
                </div>
                <div className={styles.workingBox} id={styles.workingBox2}>
                    <Image src={stepgif} alt="" width={50} />
                </div>
                <div className={styles.workingBox} id={styles.box3}>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h1>02</h1>
                        <Image className={`${styles.borderImg} img-fluid`} src={step2} alt="" width={80} height={50} />
                    </div>
                    <div>
                        <h2>Connect Site <i className={`fa fa-long-arrow-right ${styles.arrow}`} aria-hidden="true"></i></h2>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='text-muted'>Connect SpamBurner™ to </span>
                        <span className='text-muted'>any website in seconds. </span>
                    </div>
                </div>
                <div className={styles.workingBox} id={styles.workingBox4}>
                    <Image src={stepgif} alt="" width={50} />
                </div>
                <div className={styles.workingBox} id={styles.box5}>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h1>03</h1>
                        <Image className={`${styles.borderImg} img-fluid`} src={step3} alt="" width={100} height={100} />
                    </div>
                    <div>
                        <h2>View Leads <i className={`fa fa-long-arrow-right ${styles.arrow}`} aria-hidden="true"></i></h2>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='text-muted'>View all your good & spam
                            website submissions in The
                            Dashboard. </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WorkingProcedure