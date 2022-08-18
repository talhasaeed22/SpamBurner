import React from 'react'
import styles from '../styles/Home/Preview.module.css'
import CountUp from 'react-countup';
const SpamCounter = ({counter, pic, para, second}) => {
  return (
    <>
        <div className={` ${styles.spanCounter} d-flex gap-5 align-items-center text-black mx-auto p-5 `}  style={{backgroundColor:'#f1f4ff', borderRadius:'10px', }}>
            <img src={pic} className='img-fluid' height={100} width={100} alt="" />
            <span style={{fontSize:'3rem'}} className=' fw-bold '><CountUp redraw={true} start={20} duration={2}  enableScrollSpy={true} end={counter} />%</span>
            <span className='fs-2 fw-bold px-3'>{counter}% {para}.</span>
        </div>
    </>
  )
}

export default SpamCounter