import React from 'react'
import FeatureItem from './FeatureItem'
import styles from '../styles/Home/Features.module.css'
import feature1 from '../public/Images/Features/Lead Manager.svg'
import feature2 from '../public/Images/Features/Customize Filter.svg'
import feature3 from '../public/Images/Features/Form Submissions.svg'
import feature4 from '../public/Images/Features/Control Notifications.svg'
import feature5 from '../public/Images/Features/GDPR _ HIPAA.svg'
import feature6 from '../public/Images/Features/CRM Integration.svg'
import feature7 from '../public/Images/Features/Conversion Rates.svg'
import feature8 from '../public/Images/Features/24-7 Access.svg'
import feature9 from '../public/Images/Features/Instant Setup.svg'
const Features = () => {
  return (
    <>
      <div className={`container ${styles.featuresContainer} d-flex flex-column gap-5`}>
        <div className={`d-flex ${styles.featuresItem} `}>
          <FeatureItem heading={"Lead Manager Dashboard"} source={feature1} para="View your form submissions in a centralized location with access to all leads spam and good by our platform." />
          <FeatureItem heading={"Customize Spam Filter"} source={feature2} para="Filters out bad leads, but doesn't delete them unless you say so. Custom filters give you maximum flexibility." />
          <FeatureItem heading={"Form Submissions"} source={feature3} para="Automatically filters your website messages against our continuously updated global directory of spammers." />
        </div>

        <div className={`d-flex ${styles.featuresItem} `}>
          <FeatureItem heading={"Control Notifications"} source={feature4} para="Send leads to the right people at the right time with the ability to set custom notification rules on a form level." />
        
          <FeatureItem heading={"GDPR & HIPAA Compliant"} source={feature5} para="Protect highly sensitive customer and patient data with our secure encrypted system." />
        
          <FeatureItem heading={"CRM Integration"} source={feature6} para="Integrate our platform into your company CRM and import leads effortlessly." />
        </div>

        <div className={`d-flex ${styles.featuresItem} `}>
          <FeatureItem heading={"Conversion Rates"} source={feature7} para="See the visits and conversion rates of any form on your website in real-time." />
        
          <FeatureItem heading={"24/7 Access"} source={feature8} para="See both good and spam leads in your account 24/7 and have full control" />
        
          <FeatureItem heading={"Instant Setup"} source={feature9} para="Connect SpamBurner™ to any website in seconds and start blocking spam instantly" />
        </div>
      </div>
    </>
  )
}

export default Features