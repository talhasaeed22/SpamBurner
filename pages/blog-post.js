import React from 'react'
import Image from 'next/future/image'
import sample from '../public/Images/bigstock/bigstock-Salesman-In-Red-Shirt-And-Base-281473519.jpg'
import iconStyles from '../styles/BlogItem.module.css';
import styles from '../styles/BlogPost.module.css'
import PreFooter from '../Components/PreFooter';
import BlogPostCard from '../Components/Blog/BlogPostCard';
import sample1 from '../public/Images/bigstock/bigstock--207916777.jpg'
import sample2 from '../public/Images/bigstock/bigstock-Young-woman-using-digital-tabl-294797038.jpg'
import sample3 from '../public/Images/bigstock/bigstock-Startup-Small-Business-Owner-W-364891720.jpg'
const blogPost = () => {
  return (
    <>
      <div className={styles.mainContainer}>
      <div className={`container d-flex flex-column w-50 gap-4 ${styles.blogPostContainer} `}>
        <Image src={sample} className="img-fluid  " />
        <span style={{color:'#6f4ab8', fontSize:'22px'}}>blog article</span>
        <span className={styles.pHeading}>l illum dolore eu feugiat nulla facilisis et accumsan et iusto odio dignissim</span>
        <div className='d-flex gap-3'>
          <span className={iconStyles.Lowerdate}><i className="fa fa-eye" aria-hidden="true"></i>  1.002</span>
          <span className={iconStyles.Lowerdate}><i className="fa fa-clock-o" aria-hidden="true"></i>  5mins</span>
        </div>
        <div className='gap-4 d-flex flex-column'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi</p>
          <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut</p>
        </div>

        <div className='gap-4 d-flex flex-column'>
          <span className={styles.secHeading}>Facilisis et accumsan et iusto odio dignissim</span>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut</p>

        </div>

        <div className='gap-4 d-flex flex-column'>
          <span className={styles.secHeading}>Dignissim accumsan et iusto</span>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut</p>

        </div>
        <hr />
      </div>

      <div className="container" style={{marginTop:'9%'}}>
        <h1 className={`${styles.pHeading} text-center pb-3`}>Related BLog</h1>
        <div className='d-flex justify-content-between'>
          <BlogPostCard heading={'Microlearning in retail: How two retail organizations successfully employed microlearning for their frontline teams'} source={sample1}/>
          <BlogPostCard heading={"Is your talent ready for the new 'phygital' era in retail?"} source={sample2}/>
          <BlogPostCard heading={'Covid-19: How Businesses Should Handle the Coronavirus Pandemic?'} source={sample3}/>
        </div>
      </div>

      </div>
      <PreFooter heading={'SpamBurner™'} secondaryHeading="The only comprehensive solution for eliminating website spam." para={"Easy setup - no technical skills required or hidden costs"} secondaryButton={true} buttonText="Start My Free Trial Now" lastPara=""/>
    </>
  )
}

export default blogPost