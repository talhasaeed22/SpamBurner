import React from 'react'
import PreFooter from '../Components/PreFooter'
import WorkingProcedure from '../Components/WorkingProcedure'
import WorksOn from '../Components/WorksOn'
import Head from "next-head"

const HowItWorks = () => {
  return (
   <>
   <Head>
        <title>How it Works</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className="mt-5">
        <WorkingProcedure loader={true}/>
    </div>

    <div className="mt-5">
        <WorksOn/>
    </div>

    <div className="mt-5">
        <PreFooter heading={'Control form spam forever and win. Feel the burn!'} secondaryHeading="" para={""} secondaryButton={false} buttonText="Join SpamBurner™ For Free" lastPara="Then only $14 / mo. "/>
    </div>


   </>
  )
}

export default HowItWorks