import React from 'react'
import styles from '../styles/Blocked.module.css'
import Image from 'next/future/image'
import blockedSpam from '../public/Images/Spammer/Blockspam.svg'
const Flip = ({ heading, image }) => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.card}>

                    <div className={`contianer  gap-3 ${styles.fontContainer}`}>
                        <Image src={image} className={'img-fluid'} />
                        <span className='fs-3 text-black fw-bold'>{heading}</span>
                        <Image src={blockedSpam} className="img-fluid" height={130} width={130} />
                    </div>
                    <div className={styles.secondContainer}>
                        <span className='fs-5 text-black fw-bold'>{heading}</span>
                        <Image src={blockedSpam} className="img-fluid" />
                        <span>Bots are built to endlessly spam web forms all over the web. Rather than figuring out a complex workaround, our system easily blocks them out.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flip