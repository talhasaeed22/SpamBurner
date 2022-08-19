import React from 'react'
import PreFooter from '../Components/PreFooter'
import WorkingProcedure from '../Components/WorkingProcedure'
import WorksOn from '../Components/WorksOn'

const howItWorks = () => {
  return (
   <>
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

export default howItWorks