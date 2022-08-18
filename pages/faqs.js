import React, { useState } from 'react'
import AccordianItem from '../Components/Accordian/AccordianItem';
import styles from '../styles/faqs.module.css'
const faqs = () => {
    return (
        <>
            <div className="container my-5 d-flex flex-column gap-3 text-center">
                <span className={styles.pHeading}>Frequently Asked Questions</span>
                <span className={`text-muted ${styles.secHeading}`}>On average, our clients see results</span>
            </div>

            <AccordianItem
                question="How much does it cost?"
                answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page."
            />

            <AccordianItem question="What is the average cost per lead?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />

            <AccordianItem question="Are my leads exclusive?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />

            <AccordianItem question="How will I receive new leads?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />

            <AccordianItem question="Will you connect with my website?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />

            <AccordianItem question="Am I locked into a contract?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />

            <AccordianItem question="What is the set up cost?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />

            <AccordianItem question="How much in ad spend is included?" answer="Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page." />


        </>
    )
}

export default faqs