import React, { useState } from 'react'
import styles from '../styles/Home/Preview.module.css'
import CountUp from 'react-countup';
import Lottie from 'react-lottie-player'
import lottieJson from '../public/Animations/Business lead.json'

const SpamCounter = ({ counter, pic, para, second, load }) => {
  return (
    <>
      <div onFocusCapture={()=>{setLoaded(true)}} className={` ${styles.spanCounter} d-flex gap-5 align-items-center text-black mx-auto p-5 `} style={{ backgroundColor: '#f1f4ff', borderRadius: '10px', }}>
        {load && <Lottie
          loop={false}
          autoPlay={false}
          animationData={lottieJson}
          play
          style={{ width: 150, height: 150 }}
        />}
        <span style={{ fontSize: '3rem' }} className=' fw-bold '><CountUp redraw={true} start={20} duration={3} enableScrollSpy={true} end={counter} />%</span>
        <span className='fs-2 fw-bold px-3'>{counter}% {para}.</span>
      </div>
    </>
  )
}

export default SpamCounter