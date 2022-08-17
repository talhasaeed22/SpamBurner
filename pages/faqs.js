import React, { useState } from 'react'
import AccordianItem from '../Components/Accordian/AccordianItem';
// import './accordian.css';
import styles from '../styles/faqs.module.css'
const faqs = () => {
    return (
        <>
        <div className="container my-5 d-flex flex-column gap-3 text-center">
            <span className={styles.pHeading}>Frequently Asked Questions</span>
            <span className={`text-muted ${styles.secHeading}`}>On average, our clients see results</span>
        </div>
            
            <AccordianItem/>
            <AccordianItem/>
            <AccordianItem/>
            <AccordianItem/>
            <AccordianItem/>
            <AccordianItem/>
            <AccordianItem/>
            <AccordianItem/>
            
        </>
    )
}

export default faqs