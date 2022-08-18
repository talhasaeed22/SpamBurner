import React from 'react'
import styles from '../styles/Home/Home.module.css'
import FeatureBox from '../Components/FeatureBox'
import Slider from '../Components/Slider'
import SpamCounter from '../Components/SpamCounter'
import WorkingProcedure from '../Components/WorkingProcedure'
import WorksOn from '../Components/WorksOn'
import Comparison from '../Components/Comparison'
import Features from '../Components/Features'
import PreFooter from '../Components/PreFooter'
import Blocked from '../Components/Blocked'
const home = () => {
  return (
    <>
      <div className='mt-5'>
        
        <FeatureBox heading="Say Goodbye to Website Spam Forever" para="Focus on real customers by cutting out spam website submissions for good and manage your leads in one dashboard." bgButton={true} points={[]} animatedBoxes={true} source={'/Images/Feature2.png'} reverse={false} primaryHeading="" secondPara="" />
      </div>

      <div className={styles.spanHeading}>
        <span >Loved by 24,164+ Small Businesses</span>
      </div>

      <div className='my-5' >
        <Slider speed={2000}/>
      </div>
      <div className='my-5' >
        <Slider speed={2500}/>
      </div>

      <div className='my-5'>
        <SpamCounter pic={'/Images/small business 87.png'} counter={43} para="of all website submissions are spam"/>
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Find all of your website leads in one place" para="Manage your website submissions and control notifications in one easy-to-use dashboard." bgButton={false} points={['Connects to any website', 'Instant setup', 'No technical skills']} animatedBoxes={false} source={'/Images/Screenshot.png'} reverse={false} primaryHeading="SIMPLIFY YOUR LIFE" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="View both good & spam leads separately" para="Eliminate time wasted on browsing through your inbox to find your real leads." bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot_1.png'} reverse={true} primaryHeading="WORK SMARTER" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Focus on real customers" para="Automatically filters your website messages against our continuously updating global list of spammers. " secondPara="SpamBurner™ filters out bad leads, but doesn't delete them unless you say so. You can still see every lead from your member dashboard" bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot_2.png'} reverse={false} primaryHeading="GAIN CONTROL" />
      </div>

      <div className="mt-5">
        <WorkingProcedure/>
      </div>

      <div className='mt-5'>
        <WorksOn/>
      </div>

      <div className='mt-5'>
        <div className={`d-flex flex-row justify-content-around align-items-center ${styles.ComparisonMainContainer}`}>
          <span style={{color: "#6320ee"}}>Without SpamBurner</span>
          <span style={{ }}>With SpamBurner</span>
        </div>
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
          <div className={`d-flex justify-content-between my-4  `}>
            <Blocked heading={'Solicitors'} image={'/Images/Spammer/Spamer.svg'} para="Tired of seeing dozens of leads a month coming in for web design, marketing, and SEO? Block these keywords with custom filters."/>
            <Blocked heading={'Bots'} image={'/Images/Spammer/Spamer_1.svg'} para="Bots are built to endlessly spam web forms all over the web. Rather than figuring out a complex workaround, our system easily blocks them out."/>
            <Blocked heading={'Scammers'} image={'/Images/Spammer/Spamer_2.svg'} para="From fake kidnappings to credit card scams, we'll prevent all that garbage from hitting your inbox before it even has a chance."/>
            <Blocked heading={'Phishers'} image={'/Images/Spammer/Spamer_3.svg'} para="Phishing attempts through web forms are a major liability to companies. Risks resulting from fraud and ransomware can cost businesses millions of dollars."/>
            <Blocked heading={'Fakers'} image={'/Images/Spammer/Spamer_4.svg'} para="Fakers wasting your sales team's time and energy are an annoying hit to productivity. Get rid of them once and for all."/>
          </div>
        </div>
      </div>

      <PreFooter heading={'SpamBurner™'} secondaryHeading="The only comprehensive solution for eliminating website spam." para={"Easy setup - no technical skills required or hidden costs"} secondaryButton={true} buttonText="Start My Free Trial Now" lastPara=""/>
    </>
  )
}

export default home

