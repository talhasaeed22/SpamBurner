import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Navbar.module.css'
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
          <img src="/Images/Brand/SpamburnerIcon.svg" alt="" width="20" height="40" className="d-inline-block align-text-top me-2" />
          <img src={(router.pathname === '/the-dashboard' && sticky === false) ? '/Images/Brand/SpamButner White text.svg' : '/Images/Brand/SpamButnerBlacktext.svg'} alt="" width="140" height={40} className="d-inline-block align-text-top me-2 mb-lg-0" />
        </div>
        <div onClick={() => { setShowModal(true) }} className='d-flex gap-3 align-items-center fs-6 fw-bold'>
          <span className={router.pathname === '/the-dashboard' ? 'text-white' : '' }>MENU</span>
          <i className={`fa fa-bars fs-4 ${router.pathname === '/the-dashboard' ? 'text-white' : ''} `} aria-hidden="true"></i>
        </div>
      </div>

      <div className={styles.expandNav} style={{ display:showModal ? 'block' :'none' }}>
        <div className={styles.header}>
          <button type="button" className="btn-close" onClick={()=>{setShowModal(false)}} ></button>
        </div>
        <div className="modal-body">
          <div className={styles.modalLogo}>
            <img src="/Images/Brand/SpamburnerIcon.svg" alt="" width="45" height="60" className="d-inline-block align-text-top me-2" />
            <img src={'/Images/Brand/SpamButnerBlacktext.svg'} alt="" width="250" height={80} className="d-inline-block align-text-top me-2 mb-lg-0" />
          </div>
          <div className={`container ${styles.mobileLi}`}>
            <ul className={`navbar-nav  m-auto mb-2 mb-lg-0 ${styles.mobileli} `}>
              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <img src="/Images/Home .svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                  <a className={`nav-link  `} aria-current="page" onClick={() => { router.push('/home'); setShowModal(false) }}>Home</a>
                </div>
              </li>
              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <img src="/Images/The Dashboard.svg" alt="" width="20" height="20" className="d-inline-block align-text-top me-2" />

                  <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/the-dashboard'); setShowModal(false) }}>The Dashboard</a>
                </div>

              </li>
              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <img src="/Images/Features.svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                  <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/features'); setShowModal(false) }}>Features</a>
                </div>

              </li>

              <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 my-2 `}>
                <div className='d-flex gap-3 align-items-center'>
                  <img src="/Images/Pricing.svg" alt="" width="25" height="25" className="d-inline-block align-text-top me-2" />
                  <a className={`nav-link `} aria-current="page" onClick={() => { router.push('/home');setShowModal(false) }}>Pricing</a>
                </div>

              </li>
            </ul>

            <div className="container d-flex flex-column">
              <div className='w-25 d-flex align-items-center'>
                <img src="/Images/Login.svg" alt="" width="15" height="15" className="d-inline-block align-text-top me-2" />
                <button className={` ${styles.loginBtn} fs-5`} >Login</button>
              </div>
              <button className={styles.tryButton}>Try For Free</button>
            </div>

          </div>
        </div>

      </div>


    </>
  )
}

export default MobileNav