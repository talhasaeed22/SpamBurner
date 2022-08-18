import React, { useState } from 'react'
import blockedSpam from '../public/Images/Spammer/Blockspam.svg'
import styles from '../styles/Home/Home.module.css'
import { motion } from 'framer-motion'

const Blocked = ({heading, image, para}) => {
    const [first, setFirst] = useState(true)
  return (
    <>
        
          <div onMouseEnter={()=>{setFirst(false)}}  className={`contianer  gap-3 ${!first ? styles.dNone : styles.blockedItemContainer}`}>
              <img src={image} className={'img-fluid'} />
              <span className='fs-3 text-black fw-bold'>{heading}</span>
              <img src='/Images/Spammer/Blockspam.svg' className="img-fluid" height={130} width={130}   />
          </div>
          <div onMouseLeave={()=>{setFirst(true)}} className={!first ? styles.secondContainer : styles.secondNone}>
              <span className='fs-3 text-white fw-bold'>{heading}</span>
              <img src={'/Images/Spammer/Blockspam.svg'} className="img-fluid" height={120} width={120}   />
              <span className='text-white'>{para}</span>
          </div>
        
    </>
  )
}

export default Blocked