import React from 'react'
import styles from '../styles/Home/Preview.module.css'
import Lottie from 'react-lottie-player'
import lottieJson from '../public/Animations/good leads.json'

const FeatureBox = ({ heading, para, points, bgButton, animatedBoxes, source, reverse, primaryHeading, secondPara, biggerHeading }) => {
    return (
        <>
            <div className={`container-fluid ${styles.prevContainer} d-flex ${reverse && 'flex-xl-row-reverse flex-xxl-row-reverse'}  gap-5 `}>
                <div className={`${styles.left}  ${biggerHeading && 'py-2'} d-flex flex-column gap-3`}>
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
                <div className={`${styles.right} w-100`}>
                    <img className={`img-fluid ${styles.previewImage}`} src={source} alt="" />
                    {animatedBoxes && <div className={styles.boxes}>
                        {/* <div className={styles.box} id={styles.box1}>
                            <div className='d-flex align-items-top'>
                                <img src={'/Images/Website Leads.svg'} className="img-fluid me-2" width={25} height={20} alt="" />
                                <span className='fw-normal' >Website Leads</span>
                            </div>
                            <span className='fw-bold fs-xl-3 fs-md-3 fs-sm-5 text-black'>1,003</span>
                        </div>
                        <div className={styles.box} id={styles.box2}>
                            <div className='d-flex align-items-top'>
                                <img src={'/Images/Good Leads.svg'} className="img-fluid me-2" width={25} height={20} alt="" />
                                <span className='fw-normal' >Good Leads</span>
                            </div>
                            <span className='fw-bold fs-xl-3 fs-md-3 fs-sm-5 text-black'>3,003</span>
                        </div>
                        <div className={styles.box} id={styles.box3}>
                            <div className='d-flex align-items-top'>
                                <img src={'/Images/Spam Leads.svg'} className="img-fluid me-2" width={25} height={20} alt="" />
                                <span className='fw-normal' >Span Leads</span>
                            </div>
                            <span className='fw-bold fs-xl-3 fs-md-3 fs-sm-5 text-black'>703</span>
                        </div> */}
                        <Lottie
                            loop={false}
                            autoPlay={false}
                            animationData={lottieJson}
                            play
                            style={{ width: 350, height: 350 }}
                        />
                    </div>}
                </div>
            </div>
        </>
    )
}

export default FeatureBox