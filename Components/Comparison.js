import React from 'react'
import ReactCompareImage from 'react-compare-image';
import styles from '../styles/Home/Home.module.css'
const Comparison = () => {
  return (

    <div className={`container ${styles.ComparisonContainer} `}>
      <div style={{borderRadius:'23px', overflow:'hidden'}}>
      <ReactCompareImage 
      aspectRatio={true}
      hover={true} 
      sliderLineColor={'black'} 
      sliderLineWidth={4} 
      rightImage="/Images/Comparison/With Spamburner.jpg" 

      leftImage="/Images/Comparison/Before Spamburner.jpg" />
      </div>
    </div>
  )
}

export default Comparison