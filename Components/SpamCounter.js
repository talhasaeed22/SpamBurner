import React from 'react'
import Image from 'next/future/image'

const SpamCounter = ({counter, pic, para}) => {
  return (
    <>
        <div className=' d-flex gap-5 align-items-center text-black mx-auto p-5 w-50' style={{backgroundColor:'#f1f4ff', borderRadius:'10px'}}>
            <Image src={pic} className='img-fluid' height={100} width={100} alt="" />
            <span style={{fontSize:'3rem'}} className=' fw-bold '>{counter}%</span>
            <span className='fs-2 fw-bold px-3'>{counter} % {para}.</span>
        </div>
    </>
  )
}

export default SpamCounter