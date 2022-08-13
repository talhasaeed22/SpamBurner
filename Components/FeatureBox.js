import React from 'react'
import Image from 'next/future/image'
import styles from '../styles/Home/Preview.module.css'
import goodLeads from '../public/Images/Good Leads.svg'
import websiteLeads from '../public/Images/Website Leads.svg'
import SpamLeads from '../public/Images/Spam Leads.svg'

const FeatureBox = ({ heading, para, points, bgButton, animatedBoxes, source, reverse, primaryHeading, secondPara, biggerHeading }) => {
    return (
        <>
            <div className={`container-fluid ${styles.prevContainer} d-flex ${reverse && 'flex-row-reverse'} justify-content-between gap-5 `}>
                <div className={`${styles.left} ${biggerHeading ? 'w-75' : 'w-50'} ${biggerHeading && 'py-2'} d-flex flex-column gap-3`}>
                    <h3 className='text-muted fs-4'>{primaryHeading}</h3>
                    <h1 className={styles.pHeading}>{heading}</h1>
                    <p className={`text-muted ${styles.para}`}>{para}</p>
                    {secondPara !== "" && <> <p className={`text-muted ${styles.para}`}>{secondPara}</p> </>}

                    {points.length !== 0 &&
                        <div className={styles.points}>
                            {points.map((r, index) => {
                                return <div key={index}><i className="fa fa-check" aria-hidden="true"></i> {r}</div>
                            })}

                        </div>
                    }
                    {bgButton ? <button className={styles.prevButton}>Start My Free Trial Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button> : <button className={`${styles.simpleButton} ${points.length === 0 && 'text-start'} `}>Get Started <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>}
                </div>
                <div className={`right w-100`}>
                    <Image className='img-fluid' src={source} alt="" />
                    {animatedBoxes && <div className={styles.boxes}>
                        <div className={styles.box} id={styles.box1}>
                            <div className='d-flex align-items-top'>
                                <Image src={websiteLeads} className="img-fluid me-2" width={25} height={20} alt="" />
                                <span className='fw-normal' >Website Leads</span>
                            </div>
                            <span className='fw-bold fs-3 text-black'>1,003</span>
                        </div>
                        <div className={styles.box} id={styles.box2}>
                        <div className='d-flex align-items-top'>
                                <Image src={goodLeads} className="img-fluid me-2" width={25} height={20} alt="" />
                                <span className='fw-normal' >Good Leads</span>
                            </div>
                            <span className='fw-bold fs-3 text-black'>3,003</span>
                        </div>
                        <div className={styles.box} id={styles.box3}>
                        <div className='d-flex align-items-top'>
                                <Image src={SpamLeads} className="img-fluid me-2" width={25} height={20} alt="" />
                                <span className='fw-normal' >Span Leads</span>
                            </div>
                            <span className='fw-bold fs-3 text-black'>703</span>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default FeatureBox