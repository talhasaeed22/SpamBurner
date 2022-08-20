import React from 'react'
import styles from '../styles/Home/WorkingProcedure.module.css'
import Lottie from 'react-lottie-player'
import firstLoader from '../public/Animations/First loader.json'
import secondLoader from '../public/Animations/Second loader.json'
import horizontalFirstLoader from '../public/Animations/Horizontal first loader.json'
import horizontalSecondLoader from '../public/Animations/Horizontal Second Loader.json'
const WorkingProcedure = ({loader}) => {
    return (
        <>
            <div className='text-center mb-5'>
                <h1 className={styles.pHeading}>How does it work?</h1>
            </div>
            <div className={`container d-flex ${styles.procContainer} `}>
                <div className={styles.workingBox} id={styles.box1}>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h1>01</h1>
                        <img className={`${styles.borderImg} img-fluid`} src={'/Images/Step .svg'} alt="" width={100} height={100} />
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
                    {loader && <>
                        <div className="d-xl-block d-none">
                            <Lottie
                            loop={true}
                            autoPlay={false}
                            animationData={horizontalFirstLoader}
                            play
                            style={{ width: 90, height: 90 }}
                        />
                        </div>
                        <div className='d-xl-none d-block'>
                        <Lottie
                            loop={true}
                            autoPlay={false}
                            animationData={firstLoader}
                            play
                            style={{ width: 90, height: 90 }}
                        />
                        </div>
                    </>}
                </div>
                <div className={styles.workingBox} id={styles.box3}>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h1>02</h1>
                        <img className={`${styles.borderImg} img-fluid`} src={'/Images/Brand/SpamburnerIcon.svg'} alt="" width={80} height={50} />
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
                    {loader && <>
                        <div className="d-xl-block d-none">
                            <Lottie
                            loop={true}
                            autoPlay={false}
                            animationData={horizontalSecondLoader}
                            play
                            style={{ width: 90, height: 90 }}
                        />
                        </div>
                        <div className='d-xl-none d-block'>
                        <Lottie
                            loop={true}
                            autoPlay={false}
                            animationData={secondLoader}
                            play
                            style={{ width: 90, height: 90 }}
                        />
                        </div>
                    </>}
                </div>
                <div className={styles.workingBox} id={styles.box5}>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h1>03</h1>
                        <img className={`${styles.borderImg} img-fluid`} src={'/Images/Step _1.svg'} alt="" width={100} height={100} />
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