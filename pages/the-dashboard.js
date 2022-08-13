import React from 'react'
import styles from '../styles/Dashboard/Dashboard.module.css'
import WorkingProcedure from '../Components/WorkingProcedure'
import WorksOn from '../Components/WorksOn'
import Comparison from '../Components/Comparison'
import PreFooter from '../Components/PreFooter'
import Footer from '../Components/Footer'
import buttonStyles from '../styles/Home/Preview.module.css'
import SpamCounter from '../Components/SpamCounter'
import Image from 'next/future/image'
import spanSubmission from '../public/Images/43-Spam-Submission.gif'
import goodLeads from '../public/Images/Good Leads.svg'
import websiteLeads from '../public/Images/Website Leads.svg'
import SpamLeads from '../public/Images/Spam Leads.svg'
import source from '../public/Images/Feature 3.png'
import DashboardItem from '../Components/DashboardItem'
import sample from '../public/Images/Dashboard/Save Time _ Money.svg'
import sample2 from '../public/Images/Dashboard/Simply your life.svg'
import sample3 from '../public/Images/Dashboard/Built for everyone.svg'
import FeatureBox from '../Components/FeatureBox'
import preview from '../public/Images/Slider_4.png'
import goodleads from '../public/Images/Screenshot_1.png'
import screenshot from '../public/Images/Screenshot_5.png'
import filter from '../public/Images/Screenshot_2.png'
import userManage from '../public/Images/Screenshot_6.png'
import beIntelligent from '../public/Images/Screenshot.png'
const dashboard = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Manage Your Website Leads</h1>
        <h1>in a Simple, Intuitive Dashboard</h1>
        <div className={` my-4 ${styles.headingSpan}`}>
          <span>View all of your leads in one place, 100% secure</span>
          <span>and safe! Trusted by over 24,000 websites.</span>
        </div>
        <button className={`${buttonStyles.prevButton} mx-auto `} style={{ width: 'fit-content' }}>Start My Free Trial Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        <p className='my-2 text-light'>Then only $14 / mo.</p>


        <div style={{ height: '70vh' }}>
          <Image className='img-fluid' width={740} src={source} alt="" />
          <div className={styles.boxes}>
            <div className={styles.box} id={styles.box1}>
              <div className='d-flex align-items-top'>
                <Image src={websiteLeads} className="img-fluid me-2" width={25} height={20} alt="" />
                <span className='fw-normal' >Website Leads</span>
              </div>
              <span className='fw-bold fs-3 text-black'>1,003</span>
            </div>
            <div className={styles.box} id={styles.box2}>
              <div className='d-flex align-items-top'>
                <Image src={goodLeads} className="img-fluid me-2" width={25} height={20} alt="" />
                <span className='fw-normal' >Good Leads</span>
              </div>
              <span className='fw-bold fs-3 text-black'>3,003</span>
            </div>
            <div className={styles.box} id={styles.box3}>
              <div className='d-flex align-items-top'>
                <Image src={SpamLeads} className="img-fluid me-2" width={25} height={20} alt="" />
                <span className='fw-normal' >Span Leads</span>
              </div>
              <span className='fw-bold fs-3 text-black'>703</span>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboardContainer}`}>
          <DashboardItem source={sample} heading={"Save Time & Money"} para="Eliminate time wasted on browing through a cluttered inbox to find your good leads." />
          <DashboardItem source={sample2} heading={"Simply your life"} para="Manage leads, filter spam and control notifications in one easy to use dashboard." />
          <DashboardItem source={sample3} heading={"Built for everyone"} para="Our easy-to-use interface and setup is created for even the least tech-savy business owner" />
        </div>
      </div>
      <div className='container text-center py-5' style={{ width: '35%' }}>
        <span className={styles.boldSpan}>Included with SpamBurner™</span>
        <h1 className={styles.pHeading}>The lead management tool for any website</h1>
        <span className={styles.boldSpan}>The Dashboard allows for people who need a simple solution to have more control over their website.</span>
      </div>

      <div className='mt-5'>

        <FeatureBox heading="See all of your leads in one place" para="View your website leads anytime & anywhere With an intuitive, simple dashboard Where everything is in one location" bgButton={false} points={['Connects to any website', 'Instant setup', 'No technical skills']} animatedBoxes={false} source={preview} reverse={false} primaryHeading="THINK SIMPLE" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="View both good & spam leads separately" para="Don't waste your team's time opening, reading, and managing spam leads that negatively impact your time." bgButton={false} points={[]} animatedBoxes={false} source={goodleads} reverse={true} primaryHeading="THINK SMARTER" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Set up notifications to send leads to the right people" para="Easily send leads to the right person with custom notifications set on a form level." bgButton={false} points={[]} animatedBoxes={false} source={screenshot} reverse={false} primaryHeading="BE INVOLVED" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Set filters to avoid seeing the leads you don't want" para="Want to automatically send any website forms with the terms “SEO” or “web design” to the spam category? " secondPara="Use custom filters to prevent unwanted submissions from being seen in your good leads." bgButton={false} points={[]} animatedBoxes={false} source={filter} reverse={true} primaryHeading="BE ORGANIZED" biggerHeading={true} />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Add users with defined access levels" para="Include any member of your team that needs access to the Lead Dashboard and define their access level." bgButton={false} points={[]} animatedBoxes={false} source={userManage} reverse={false} primaryHeading="BE IN CONTROL" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="See real conversion rates" para="View actual conversion rates that don't take into account spam leads that can skew your data." bgButton={false} points={[]} animatedBoxes={false} source={beIntelligent} reverse={true} primaryHeading="BE INTELLIGENT" />
      </div>


      <div className='text-center my-2'>
        <span className={` my-4 fs-1 fw-bold text-dark `} >Loved by 250,000+ companies</span>
      </div>

      <div className="mt-5">
        cards
      </div>

      
      <div className='my-5'>
        <SpamCounter pic={spanSubmission} counter={87} para="of small businesses don't manage their leads." second={true}/>
      </div>

      <div className="mt-5">
        <WorkingProcedure/>
      </div>

      <div className='mt-5'>
        <Comparison />
      </div>

      <div className='mt-5'>
        <WorksOn/>
      </div>

      <PreFooter/>

      
        <Footer/>
      


    </>
  )
}

export default dashboard