import React from 'react'
import styles from '../styles/Home/Home.module.css'
import FeatureBox from '../Components/FeatureBox'
import previewPic from '../public/Images/Feature2.png'
import leaderDashboard from '../public/Images/Screenshot.png'
import goodLeads from '../public/Images/Screenshot_1.png'
import Slider from '../Components/Slider'
import SpamCounter from '../Components/SpamCounter'
import spanSubmission from '../public/Images/43-Spam-Submission.gif'
import screenshot from '../public/Images/Screenshot_2.png'
import WorkingProcedure from '../Components/WorkingProcedure'
import WorksOn from '../Components/WorksOn'
import Comparison from '../Components/Comparison'
import Features from '../Components/Features'
import PreFooter from '../Components/PreFooter'
import Footer from '../Components/Footer'
const home = () => {
  return (
    <>
      <div className='mt-5'>
        
        <FeatureBox heading="Say Goodbye to Website Spam Forever" para="Focus on real customers by cutting out spam website submissions for good and manage your leads in one dashboard." bgButton={true} points={[]} animatedBoxes={true} source={previewPic} reverse={false} primaryHeading="" secondPara="" />
      </div>

      <div className={styles.spanHeading}>
        <span >Loved by 24,164+ Small Businesses</span>
      </div>

      <div className='my-5'>
        <Slider/>
      </div>

      <div className='my-5'>
        <SpamCounter pic={spanSubmission} counter={43} para="of all website submissions are spam"/>
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Find all of your website leads in one place" para="Manage your website submissions and control notifications in one easy-to-use dashboard." bgButton={false} points={['Connects to any website', 'Instant setup', 'No technical skills']} animatedBoxes={false} source={leaderDashboard} reverse={false} primaryHeading="SIMPLIFY YOUR LIFE" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="View both good & spam leads separately" para="Eliminate time wasted on browsing through your inbox to find your real leads." bgButton={false} points={[]} animatedBoxes={false} source={goodLeads} reverse={true} primaryHeading="WORK SMARTER" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Focus on real customers" para="Automatically filters your website messages against our continuously updating global list of spammers. " secondPara="SpamBurner™ filters out bad leads, but doesn't delete them unless you say so. You can still see every lead from your member dashboard" bgButton={false} points={[]} animatedBoxes={false} source={screenshot} reverse={false} primaryHeading="GAIN CONTROL" />
      </div>

      <div className="mt-5">
        <WorkingProcedure/>
      </div>

      <div className='mt-5'>
        <WorksOn/>
      </div>

      <div className='mt-5'>
        <Comparison />
      </div>

      <div className='mt-5'>
        <Features/>
      </div>

      <div className="mt-5 text-center">
        <div className={` ${styles.blockContainer}`}>
          <h1 className={styles.pHeading}> Who We Block </h1>
          <span className=''>Our out-of-the-box settings and global spammer blacklist handle 99% </span>
          <span className=''>of all website spam, but custom filters give you maximum flexibility</span>
        </div>
      </div>

      <PreFooter heading={'SpamBurner™'} secondaryHeading="The only comprehensive solution for eliminating website spam." para={"Easy setup - no technical skills required or hidden costs"} secondaryButton={true} buttonText="Start My Free Trial Now" lastPara=""/>
    </>
  )
}

export default home

