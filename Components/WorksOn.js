import React from 'react'
import styles from '../Styles/WorksOn.module.css'
import Image from 'next/future/image'
import logo from '../public/Images/Brand/SpamburnerIcon.svg'
import anyWebsitelogo1 from '../public/Images/AnyWebsite/any website logo.svg'
import anyWebsitelogo2 from '../public/Images/AnyWebsite/any website logo_1.svg'
import anyWebsitelogo3 from '../public/Images/AnyWebsite/any website logo_2.svg'
import anyWebsitelogo4 from '../public/Images/AnyWebsite/any website logo_3.svg'
import anyWebsitelogo5 from '../public/Images/AnyWebsite/any website logo_4.svg'
import anyWebsitelogo6 from '../public/Images/AnyWebsite/any website logo_5.svg'
import anyWebsitelogo7 from '../public/Images/AnyWebsite/any website logo_6.svg'
import anyWebsitelogo8 from '../public/Images/AnyWebsite/any website logo_7.svg'
import anyWebsitelogo9 from '../public/Images/AnyWebsite/any website logo_8.svg'
import anyWebsitelogo10 from '../public/Images/AnyWebsite/any website logo_9.svg'
import anyWebsitelogo11 from '../public/Images/AnyWebsite/any website logo_10.svg'
import anyWebsitelogo12 from '../public/Images/AnyWebsite/any website logo_11.svg'
import anyWebsitelogo13 from '../public/Images/AnyWebsite/any website logo_12.svg'
import anyWebsitelogo14 from '../public/Images/AnyWebsite/any website logo_13.svg'
import anyWebsitelogo15 from '../public/Images/AnyWebsite/any website logo_14.svg'
const WorksOn = () => {
    return (
        <>
            <div className={`container-fluid ${styles.worksContainer} d-flex justify-content-between gap-5 `} style={{ backgroundColor: '#f1f4ff' }}>
                <div className={`${styles.left} d-flex flex-column gap-3`} style={{ width: '45%' }}>
                    <Image src={logo} alt="" width={130} height={130} />
                    <h1 className={styles.pHeading}>Works on any website. </h1>
                    <p className={`text-muted ${styles.para}`}>Connect SpamBurner™ to any website in seconds and start protecting your business immediately.</p>
                    <button className={`${styles.simpleButton} w-75 text-start p-0`}>Connect My Website<i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className={`${styles.logosContainer} w-100`}>

                    <div className={styles.logoRow}>

                        <Image src={anyWebsitelogo1} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo2} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo3} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo4} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo5} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />

                    </div>
                    <div className={styles.logoRow}>

                        <Image src={anyWebsitelogo6} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo7} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo8} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo9} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo10} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />

                    </div>
                    <div className={styles.logoRow}>

                        <Image src={anyWebsitelogo11} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo12} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo13} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo14} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />
                        <Image src={anyWebsitelogo15} className={`img-fluid ${styles.borderImg}`} height={130} width={130} alt="" />

                    </div>
                </div>

            </div>

        </>
    )
}

export default WorksOn