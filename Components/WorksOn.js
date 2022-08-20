import React from 'react'
import styles from '../Styles/Home/WorksOn.module.css'
import { motion } from "framer-motion"
const WorksOn = () => {
    return (
        <>
            <div className={`container-fluid ${styles.worksContainer} d-flex gap-5 `} style={{ backgroundColor: '#f1f4ff' }}>
                <div className={`${styles.left} d-flex flex-column gap-3`} >
                    <img src={'/Images/Brand/SpamburnerIcon.svg'} alt="" width={130} height={130} />
                    <h1 className={styles.pHeading}>Works on any website. </h1>
                    <p className={`text-muted ${styles.para}`}>Connect SpamBurner™ to any website in seconds and start protecting your business immediately.</p>
                    <button className={`${styles.simpleButton} ${styles.simpleBtn} w-75 text-start p-0`}>Connect My Website<i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className={`${styles.logosContainer} w-100`}>

                    <div className={styles.logoRow}>

                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_1.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_2.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_3.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_4.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>

                    </div>
                    <div className={styles.logoRow}>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_5.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_6.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_7.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_8.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_9.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>

                    </div>
                    <div className={styles.logoRow}>

                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_10.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_11.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_12.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_13.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>
                        <div className={`${styles.borderImg}`}>
                            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }} src={'/Images/AnyWebsite/any website logo_14.svg'} className={`img-fluid `} height={130} width={130} alt="" />
                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}

export default WorksOn