import React, {useState} from 'react'
import styles from '../../styles/faqs.module.css'

const AccordianItem = ({question, answer}) => {
    const [show, setShow] = useState(false);

  return (
    <>
    <section className={`${styles.mainDiv} container my-3`}>
                    <div className={styles.mainHeading}>
                        <p onClick={() => setShow(!show)}> {show ? <i className="fa fa-minus-circle" aria-hidden="true"></i>: <i className="fa fa-plus-circle" aria-hidden="true"></i>} </p>
                        <h3>{question}</h3>

                    </div>
             {show && <p className={`${styles.answers} text-muted`}> Your dedicated RoofGrow Ads specialist will work with you to determine the monthly ad spend that works best for your business. We offer several Plans for managing the campaign, which includes daily optimization and improvements to ensure that you are getting results that drive a clear ROI. View more details on our pricing page. </p>}      
            </section>
    </>
  )
}

export default AccordianItem