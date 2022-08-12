import React from 'react'
import Image from 'next/future/image'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light `}>
                <div className={`container-fluid ${styles.navContainer}`}>
                    <a id='logo' className=" d-flex align-items-end navbar-brand" href="/home">
                        <Image src="/Images/Brand/SpamburnerIcon.svg" alt="" width="25" height="40" className="d-inline-block align-text-top me-2" />
                        <Image src="/Images/Brand/SpamButnerBlacktext.svg" alt="" width="180" height={40} className="d-inline-block align-text-top me-2 mb-lg-0" />
                        {/* <span className="brandHeading">SpamBurner</span> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className={`nav-link ${styles.active}`}  aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-3"><a className='nav-link' aria-current="page" href="/home">The Dashboard</a></li>

                            <li className="nav-item mx-3"><a className='nav-link' aria-current="page" href="/home">Features</a></li>

                            <li className="nav-item mx-3"><a className='nav-link' aria-current="page" href="/home">Pricing</a></li>

                        </ul>
                        <div className={` form-check form-switch text-light mx-3 `}>
                            <button  className={`nav-btn ${styles.loginBtn}`}> <i className="fa fa-user-o" aria-hidden="true"></i> <span>Log In</span></button>
                            <button  className={`nav-btn ${styles.trialBtn}`}>Start Free Trial</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar