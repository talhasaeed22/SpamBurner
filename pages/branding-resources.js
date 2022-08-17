import React from 'react'
import buttonStyles from '../styles/Home/Preview.module.css'
import styles from '../styles/branding.module.css'
import Image from 'next/future/image'
import whiteLogo from '../public/Images/Branding page/Spamburner White Logo.png'
import ColourPalette from '../Components/ColourPalette'
const brandingResources = () => {
    const colorPalette = [{ name: 'Navy Black:', color1: '', gradient:false, color2: '', textColor: 'white', colorCode: '#0D0D2B' }, { name: 'Black:', gradient:false, color1: '', color2: '', textColor: 'white', colorCode: '#271D33' }, { name: 'GRAY 04:' , gradient:false, color1: '', color2: '', textColor: 'white', colorCode: '#A5A5A5' }, { name: 'GRAY 03:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#D6DBE5' }, { name: 'GRAY 02:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#313539' }, { name: 'WHITE:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#fff' }, { name: 'GRAY 01:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#F7F7F9' }, { name: 'LAVANDER:', color1: '', color2: '', textColor: 'black', colorCode: '#F5EEFF' }, { name: 'PURPLE:', gradient:false, color1: '', color2: '', textColor: 'white', colorCode: '#6320EE' }, { name: 'GREEN 1:', gradient:false, color1: '', color2: '', textColor: 'white', colorCode: '#23CC94' }, { name: 'RED:', gradient:false, color1: '', color2: '', textColor: 'white', colorCode: '#E01E1E' }, { name: 'PINK:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#FCE0E0' }, { name: 'GREEN 2:', gradient:false, color1: '', color2: '', textColor: 'white', colorCode: '#59C961' }, { name: 'GREEN 3:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#E1F9E2' }, { name: 'YELLOW:', gradient:false, color1: '', color2: '', textColor: 'black', colorCode: '#FCEE3D' }, { name: 'GRADIENT 01: ', gradient:true, textColor: 'white', color1: '#6320EE', color2: '#1A104A', colorCode: '#6320EE + #1A104A' }, { name: 'GRADIENT 02:', gradient:true, color1: '#FF6A00', color2: '#FFD436', textColor: 'white', colorCode: '#FF6A00 + #FFD436' }, { name: 'GRADIENT 03:',gradient:true, color1: '#6320EE', color2: '#EB1A04', textColor: 'white', colorCode: '#6320EE + #EB1A04' }, { name: 'GRADIENT 04:',gradient:true, color1: '#6320EE', color2: '#18EDB9', textColor: 'white', colorCode: '#6320EE + #18EDB9' },]
    return (
        <>
            <div className={`container ${styles.brandingContainer}`}>
                <h1 className={styles.pHeading}>Logos and Resources</h1>
                <span className={`${styles.span} text-muted`}>These are official SpamBurner graphical resources that you can include on your webpage, in your mobile application, or in printed material</span>
                <button className={`${buttonStyles.prevButton} mx-auto `} style={{ width: 'fit-content', marginTop: '23px', background: 'none', backgroundColor: '#00d084' }}>Start My Free Trial Now <i className="fa fa-long-arrow-down mx-2" aria-hidden="true"></i></button>
            </div>
            <div className={`container ${styles.brandingContainer}`}>
                <h1 className={styles.secHead}>Logo Guidelines</h1>
                <span className={`${styles.span} text-muted`}>The logo should never be placed vertically, outlined or</span>
                <span className={`${styles.span} text-muted`}>modified in shape or form. Thank you for not embellishing.</span>
            </div>

            <div className={`container ${styles.middleSection} py-5 `}>
                <div className={styles.left}>
                    <div className={styles.leftBorder}>
                        <Image src="/Images/Brand/SpamburnerIcon.svg" alt="" width="25" height="40" className="d-inline-block align-text-top me-2" />
                        <Image src="/Images/Brand/SpamButnerBlacktext.svg" alt="" width="180" height={40} className="d-inline-block align-text-top me-2 mb-lg-0" />
                    </div>
                    <h6 className='fw-bold'>Primary Logotype</h6>
                    <span>Use this whenever possible on a white background.</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightBorder}>
                        <Image src={whiteLogo} className="img-fluid" />
                    </div>
                    <h6 className='fw-bold'>Primary Logotype</h6>
                    <span>Use this whenever possible on a dark background.</span>
                </div>
            </div>

            <div className={`${styles.iconSection} py-5`}>
                <div className={styles.iconPara}>
                    <h6>Icon</h6>
                    <span>Use in UI with limited space on different background.</span>
                </div>

                <div>
                    <Image src="/Images/Brand/SpamburnerIcon.svg" alt="" width="100" height="100" className="d-inline-block align-text-top me-2" />
                </div>

                <div className='d-flex gap-5'>
                    <div className='d-flex flex-column gap-3'>
                        <div className={styles.brandingIcons} >
                            <Image src="/Images/Branding page/Spamburner icon_1.svg" alt="" width="65" height="65" />
                        </div>
                        <div className={styles.brandingIcons}>
                            <Image src="/Images/Branding page/Spamburner icon_4.svg" alt="" width="65" height="65" />
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <div className={styles.brandingIcons}>
                            <Image src="/Images/Branding page/Spamburner icon_2.svg" alt="" width="65" height="65" />
                        </div>
                        <div className={styles.brandingIcons}>
                            <Image src="/Images/Branding page/Spamburner icon_5.svg" alt="" width="65" height="65" />
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <div className={styles.brandingIcons}>
                            <Image src="/Images/Branding page/Spamburner icon_3.svg" alt="" width="65" height="65" />
                        </div>
                        <div className={styles.brandingIcons}>
                            <Image src="/Images/Branding page/Spamburner icon_6.svg" alt="" width="65" height="65" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={`container ${styles.brandingContainer}`}>
                    <h1 className={styles.secHead}>Official Colour Palette</h1>
                    <span className={` text-muted fs-6`}>These are the brand colors for Easy Digital Downloads. Copy the HEX codes below.</span>
                </div>
            </div>
            <div className="container">
                <div className="row ">

                    {colorPalette.map((color, index) => {
                        return <>
                        {(index === 0 || index === 5 || index === 10 || index === 15) && <div key={index} className="col-md-1 d-md-block"></div>}
                        <div key={index} className="col-md-2 col-6 p-0">
                            <ColourPalette name={color.name} colorCode={color.colorCode} textColor={color.textColor} color1={color.color1} color2={color.color2} gradient={color.gradient} />
                        </div>
                        {(index === 4 || index === 9 || index=== 14) && <div key={index} className="col-md-1"></div>}
                        </>
                    })}

                </div>
            </div>

            <div className="container my-5" style={{width:'60%'}}>
                <h1 className={`${styles.secHead} m-0` }>
                Agreement

                </h1>
                <span className={`text-muted `}>By using the SpamBurner trademarks and resources on this site, you agree to follow the SpamBurner Trademark Guidelines in our Brand Guidelines - as well as our Terms of Service and all other SpamBurner rules and policies. If you have any questions, contact us at Help@SpamBurner.com. Please submit your request in English (non-English materials must come with translations).</span>
            </div>
        </>
    )
}

export default brandingResources