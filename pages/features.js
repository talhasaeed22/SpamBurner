import React from 'react'
import headingStyles from '../styles/Dashboard/Dashboard.module.css'
import Features from '../Components/Features'
import buttonStyles from '../styles/Home/Preview.module.css'
import PreFooter from '../Components/PreFooter'
import WorkingProcedure from '../Components/WorkingProcedure'
import NewCrosal from '../Components/Carousel/NewCrosal'
import styles from '../styles/Home/Features.module.css'
const Feature = () => {
    return (
        <>
            <div className={`container text-center py-5 ${styles.featurePageContainer} `} >

                <h1 className={headingStyles.pHeading}>A powerful tool to control your website submissions.</h1>
                <div style={{ margin: 'auto', width: '65%' }}>
                    <span className={headingStyles.boldSpan}>There&apos;s finally a solution for unwanted messages and notifications, and you can start using it today.</span>
                </div>
            </div>

            <div className="mt-5">
                <Features />
            </div>

            <div className={`container text-center py-5 d-flex flex-column gap-4  ${styles.featurePageContainer}  `}>

                <h1 className={headingStyles.pHeading}>The only comprehensive solution for eliminating website spam.</h1>
                <span className={"text-muted"}>Easy setup - no technical skills required or hidden costs</span>
                <button className={`${buttonStyles.prevButton} mx-auto`} style={{width:'fit-content'}}>Start My Free Trial Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            </div>

            <div className={`container-fluid ${styles.carosalContainer} `}>
            
            <NewCrosal/>
            </div>

            <div className="mt-5">
                <WorkingProcedure loader={true}/>
            </div>

            <PreFooter heading={'Control form spam forever and win.Feel the burn!'} secondaryHeading="" para={""} secondaryButton={false} buttonText="Join SpamBurner™ For Free" lastPara="Then only $14 / mo."/>
        </>
    )
}

export default Feature
