import React from 'react'
import styles from '../styles/Dashboard/Dashboard.module.css'
import WorkingProcedure from '../Components/WorkingProcedure'
import WorksOn from '../Components/WorksOn'
import Comparison from '../Components/Comparison'
import PreFooter from '../Components/PreFooter'
import buttonStyles from '../styles/Home/Preview.module.css'
import SpamCounter from '../Components/SpamCounter'
import DashboardItem from '../Components/Dashboard/DashboardItem'
import FeatureBox from '../Components/FeatureBox'
import Card from '../Components/Dashboard/Card'

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
          <img className='img-fluid' width={740} src={'/Images/Feature 3.png'} alt="" />
          <div className={styles.boxes} style={{width:'77%'}}>
            <div className={styles.box} id={styles.box1}>
              <div className='d-flex align-items-top'>
                <img src={'/Images/Website Leads.svg'} className="img-fluid me-2" width={25} height={20} alt="" />
                <span className='fw-normal' >Website Leads</span>
              </div>
              <span className='fw-bold fs-3 text-black'>1,003</span>
            </div>
            <div className={styles.box} id={styles.box2}>
              <div className='d-flex align-items-top'>
                <img src={'/Images/Good Leads.svg'} className="img-fluid me-2" width={25} height={20} alt="" />
                <span className='fw-normal' >Good Leads</span>
              </div>
              <span className='fw-bold fs-3 text-black'>3,003</span>
            </div>
            <div className={styles.box} id={styles.box3}>
              <div className='d-flex align-items-top'>
                <img src={'/Images/Spam Leads.svg'} className="img-fluid me-2" width={25} height={20} alt="" />
                <span className='fw-normal' >Span Leads</span>
              </div>
              <span className='fw-bold fs-3 text-black'>703</span>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboardContainer}`}>
          <DashboardItem source={'/Images/Dashboard/Save Time _ Money.svg'} heading={"Save Time & Money"} para="Eliminate time wasted on browing through a cluttered inbox to find your good leads." />
          <DashboardItem source={'/Images/Dashboard/Simply your life.svg'} heading={"Simply your life"} para="Manage leads, filter spam and control notifications in one easy to use dashboard." />
          <DashboardItem source={'/Images/Dashboard/Built for everyone.svg'} heading={"Built for everyone"} para="Our easy-to-use interface and setup is created for even the least tech-savy business owner" />
        </div>
      </div>
      <div className={` ${styles.headingContainer} container text-center py-5`}>
        <span className={styles.boldSpan}>Included with SpamBurner™</span>
        <h1 className={styles.pHeading}>The lead management tool for any website</h1>
        <span className={styles.boldSpan}>The Dashboard allows for people who need a simple solution to have more control over their website.</span>
      </div>

      <div className='mt-5'>

        <FeatureBox heading="See all of your leads in one place" para="View your website leads anytime & anywhere With an intuitive, simple dashboard Where everything is in one location" bgButton={false} points={['Connects to any website', 'Instant setup', 'No technical skills']} animatedBoxes={false} source={'/Images/Slider_4.png'} reverse={false} primaryHeading="THINK SIMPLE" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="View both good & spam leads separately" para="Don't waste your team's time opening, reading, and managing spam leads that negatively impact your time." bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot_1.png'} reverse={true} primaryHeading="THINK SMARTER" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Set up notifications to send leads to the right people" para="Easily send leads to the right person with custom notifications set on a form level." bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot_5.png'} reverse={false} primaryHeading="BE INVOLVED" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Set filters to avoid seeing the leads you don't want" para="Want to automatically send any website forms with the terms “SEO” or “web design” to the spam category? " secondPara="Use custom filters to prevent unwanted submissions from being seen in your good leads." bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot_2.png'} reverse={true} primaryHeading="BE ORGANIZED" biggerHeading={true} />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="Add users with defined access levels" para="Include any member of your team that needs access to the Lead Dashboard and define their access level." bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot_6.png'} reverse={false} primaryHeading="BE IN CONTROL" secondPara="" />
      </div>

      <div className='mt-5'>
        <FeatureBox heading="See real conversion rates" para="View actual conversion rates that don't take into account spam leads that can skew your data." bgButton={false} points={[]} animatedBoxes={false} source={'/Images/Screenshot.png'} reverse={true} primaryHeading="BE INTELLIGENT" />
      </div>


      <div className={` ${styles.cardsContainer} my-2 py-4`}>
        <div className='text-center my-5'>
          <span className={` my-4 fs-1 fw-bold text-dark text-center `} >Loved by 250,000+ companies</span>
        </div>
        <div className={` ${styles.cardItemsContainer} flex-xxl-row flex-column container-fluid d-flex gap-3`}>
          <div>
            <Card image={'/Images/Clients Logo/Client logo B2-03.png'}/>
          </div>
          <div>
            <Card image={'/Images/Clients Logo/Artboard 12.png'}/>
          </div>
          <div>
            <Card image={'/Images/Clients Logo/DTH Roofing Colored logo.png'}/>
          </div>
          <div>
            <Card image={'/Images/Clients Logo/Client logo B2-07.png'}/>
          </div>
          <div>
            <Card image={'/Images/Clients Logo/client logo-03.png'}/>
          </div>
        </div>
      </div>

      

      
      <div className='my-5'>
        <SpamCounter pic={'/Images/small business 87.png'} counter={87} para="of small businesses don't manage their leads." second={true}/>
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

      <PreFooter heading={'SpamBurner™'} secondaryHeading="The only comprehensive solution for eliminating website spam." para={"Easy setup - no technical skills required or hidden costs"} secondaryButton={true} buttonText="Start My Free Trial Now" lastPara=""/>
    </>
  )
}

export default dashboard