import React from 'react'
import styles from '../../styles/Dashboard/Dashboard.module.css'
const DashboardItem = ({source, heading, para}) => {
  return (
    <>
        <div className={`${styles.dashboardItem} `}>
            <img src={source} className={'img-fluid'} width={60} />
            <h5>{heading}</h5>
            <span>{para}</span>
        </div>
    </>
  )
}

export default DashboardItem