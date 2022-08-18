import React, { useEffect, useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import { useRouter } from "next/router";

const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('scroll', () => {
                // var header = document.querySelector('.n-parent');
                // header.classList.toggle("sticky", window.scrollY > 5);
                if(router.pathname === '/the-dashboard'){
                    if(window.scrollY > 1500){
                        setSticky(true)
                        
                    }else{
                        setSticky(false)
                    }
                }else{
                    if(window.scrollY > 500){
                        setSticky(true)
                        
                    }else{
                        setSticky(false)
                    }
                }
            })
        }
    }, [])

    const router = useRouter();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light `}>
                <div className={`container-fluid ${styles.navContainer} ${sticky && styles.sticky} n-parent`} >
                    <a id='logo' className=" d-flex align-items-end navbar-brand" href="/home">
                        <img src="/Images/Brand/SpamburnerIcon.svg" alt="" width="25" height="40" className="d-inline-block align-text-top me-2" />
                        <img src={(router.pathname === '/the-dashboard' && sticky === false) ? '/Images/Brand/SpamButner White text.svg' : '/Images/Brand/SpamButnerBlacktext.svg'} alt="" width="180" height={40} className="d-inline-block align-text-top me-2 mb-lg-0" />
                        {/* <span className="brandHeading">SpamBurner</span> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
                            <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 `}>
                                <a className={`nav-link ${(router.pathname === '/the-dashboard' && !sticky ) ? 'text-light' : ''} ${router.pathname === '/home' && styles.active}`} aria-current="page" onClick={() => { router.push('/home') }}>Home</a>
                            </li>
                            <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 `}><a className={`nav-link ${(router.pathname === '/the-dashboard' && !sticky ) ? 'text-light' : ''} ${router.pathname === '/the-dashboard' && styles.active}`} aria-current="page" onClick={() => { router.push('/the-dashboard') }}>The Dashboard</a></li>

                            <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 `}><a className={`nav-link ${(router.pathname === '/the-dashboard' && !sticky ) ? 'text-light' : ''} ${router.pathname === '/features' && styles.active}`} aria-current="page" onClick={() => { router.push('/features') }}>Features</a></li>

                            <li style={{ cursor: 'pointer' }} className={`nav-item mx-3 `}><a className={`nav-link ${(router.pathname === '/the-dashboard' && !sticky ) ? 'text-light' : ''} ${router.pathname === '/pricing' && styles.active}`} aria-current="page" onClick={() => { router.push('/home') }}>Pricing</a></li>

                        </ul>
                        <div className={` form-check form-switch text-light mx-3 `}>
                            <button className={`nav-btn ${styles.loginBtn} ${(router.pathname === '/the-dashboard' && !sticky ) ? 'text-light' : ''}`}> <i className="fa fa-user-o" aria-hidden="true"></i> <span>Log In</span></button>
                            <button className={`nav-btn ${styles.trialBtn}`}>Start Free Trial</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar