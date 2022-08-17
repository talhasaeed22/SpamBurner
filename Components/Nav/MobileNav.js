import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Image from 'next/future/image'
import { useRouter } from "next/router";

const MobileNav = () => {
  const [sticky, setSticky] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const ref = useRef();

  const opernModal = ()=>{
    ref.current.click();
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
        // var header = document.querySelector('.n-parent');
        // header.classList.toggle("sticky", window.scrollY > 5);
        if (router.pathname === '/the-dashboard') {
          if (window.scrollY > 1500) {
            setSticky(true)

          } else {
            setSticky(false)
          }
        } else {
          if (window.scrollY > 500) {
            setSticky(true)

          } else {
            setSticky(false)
          }
        }
      })
    }
  }, [])

  const router = useRouter();
  return (
    <>
      <div className={`${styles.mobileNavContainer} w-100 py-2 container-fluid d-flex justify-content-between`}>
        <div className='logo'>
          <Image src="/Images/Brand/SpamburnerIcon.svg" alt="" width="25" height="40" className="d-inline-block align-text-top me-2" />
          <Image src={(router.pathname === '/the-dashboard' && sticky === false) ? '/Images/Brand/SpamButner White text.svg' : '/Images/Brand/SpamButnerBlacktext.svg'} alt="" width="180" height={40} className="d-inline-block align-text-top me-2 mb-lg-0" />
        </div>
        <div onClick={() => { setShowModal(true) }} className='d-flex gap-3 align-items-center fs-6 fw-bold'>
          <span>MENU</span>
          <i className="fa fa-bars fs-4" aria-hidden="true"></i>
        </div>
      </div>

      <div className={styles.expandNav} style={{ display:showModal ? 'block' :'none' }}>
        <div className={styles.header}>
          <button type="button" className="btn-close" onClick={()=>{setShowModal(false)}} ></button>
        </div>
        <div className="modal-body">
          <div className={styles.modalLogo}>
            <Image src="/Images/Brand/SpamburnerIcon.svg" alt="" width="45" height="60" className="d-inline-block align-text-top me-2" />
            <Image src={(router.pathname === '/the-dashboard' && sticky === false) ? '/Images/Brand/SpamButner White text.svg' : '/Images/Brand/SpamButnerBlacktext.svg'} alt="" width="250" height={80} className="d-inline-block align-text-top me-2 mb-lg-0" />
          </div>
          <div className={`container ${styles.mobileLi}`}>
            <ul className={`navbar-nav  m-auto mb-2 mb-lg-0 ${styles.mobileli} `}>
              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <Image src="/Images/Home .svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                  <a className={`nav-link  `} aria-current="page" onClick={() => { router.push('/home'); setShowModal(false) }}>Home</a>
                </div>
              </li>
              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <Image src="/Images/The Dashboard.svg" alt="" width="20" height="20" className="d-inline-block align-text-top me-2" />

                  <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/the-dashboard'); setShowModal(false) }}>The Dashboard</a>
                </div>

              </li>
              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <Image src="/Images/Features.svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                  <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/features'); setShowModal(false) }}>Features</a>
                </div>

              </li>

              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <Image src="/Images/Pricing.svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                  <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/home');setShowModal(false) }}>Pricing</a>
                </div>

              </li>
            </ul>

            <div className="container d-flex flex-column">
              <div className='w-25 d-flex align-items-center'>
                <Image src="/Images/Login.svg" alt="" width="15" height="15" className="d-inline-block align-text-top me-2" />
                <button className={` ${styles.loginBtn} fs-5`} >Login</button>
              </div>
              <button className={styles.tryButton}>Try For Free</button>
            </div>

          </div>
        </div>

      </div>


{/* 
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div  >
          <div className='bg-white' style={{height:'100vh'}} >
            <div className="modal-header">

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className={styles.modalLogo}>
                <Image src="/Images/Brand/SpamburnerIcon.svg" alt="" width="45" height="60" className="d-inline-block align-text-top me-2" />
                <Image src={(router.pathname === '/the-dashboard' && sticky === false) ? '/Images/Brand/SpamButner White text.svg' : '/Images/Brand/SpamButnerBlacktext.svg'} alt="" width="250" height={80} className="d-inline-block align-text-top me-2 mb-lg-0" />
              </div>
              <div className={`container ${styles.mobileLi}`}>
                <ul className={`navbar-nav  m-auto mb-2 mb-lg-0 ${styles.mobileli} `}>
                  <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                    <div className='d-flex gap-3 align-items-center'>
                      <Image src="/Images/Home .svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                      <a className={`nav-link  `} aria-current="page" onClick={() => { router.push('/home') }}>Home</a>
                    </div>
                  </li>
                  <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                    <div className='d-flex gap-3 align-items-center'>
                      <Image src="/Images/The Dashboard.svg" alt="" width="20" height="20" className="d-inline-block align-text-top me-2" />

                      <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/the-dashboard') }}>The Dashboard</a>
                    </div>

                  </li>
                  <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                    <div className='d-flex gap-3 align-items-center'>
                      <Image src="/Images/Features.svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                      <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/features') }}>Features</a>
                    </div>

                  </li>

                  <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                    <div className='d-flex gap-3 align-items-center'>
                      <Image src="/Images/Pricing.svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                      <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/home') }}>Pricing</a>
                    </div>

                  </li>
                </ul>

                <div className="container d-flex flex-column">
                  <div className='w-25 d-flex align-items-center'>
                    <Image src="/Images/Login.svg" alt="" width="15" height="15" className="d-inline-block align-text-top me-2" />
                    <button className={` ${styles.loginBtn} fs-5`} >Login</button>
                  </div>
                  <button className={styles.tryButton}>Try For Free</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div> */}

    </>
  )
}

export default MobileNav