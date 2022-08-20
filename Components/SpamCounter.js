import React from 'react'
import styles from '../styles/Home/Preview.module.css'
// import CountUp from 'react-countup';
import Lottie from 'react-lottie-player'
import { CountUp } from 'use-count-up'

const SpamCounter = ({ counter, pic, para, second, load, json, counterLoad }) => {
  return (
    <>
      <div onFocusCapture={()=>{setLoaded(true)}} className={` ${styles.spanCounter} d-flex gap-5 align-items-center text-black mx-auto p-5 `} style={{ backgroundColor: '#f1f4ff', borderRadius: '10px', }}>
        {load && <Lottie
          loop={false}
          autoPlay={false}
          animationData={json}
          play
          style={{ width: 150, height: 150 }}
        />}
        <span style={{ fontSize: '3rem' }} className=' fw-bold '>
          
            {counterLoad && <CountUp isCounting end={counter} duration={4} />}
          %</span>
        <span className='fs-2 fw-bold px-3'>{counter}% {para}.</span>
      </div>
    </>
  )
}

export default SpamCounter