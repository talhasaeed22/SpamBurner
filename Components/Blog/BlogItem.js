import React from 'react'
import styles from '../../styles/BlogItem.module.css'

const BlogItem = ({image, heading, para, date, seen, time}) => {
    return (
        <>
            <div className={`${styles.blogContainer} container`}>
                <div className={styles.left} style={{backgroundImage:`url(${image})`}}>
                    {/* <Image src={sample} className='img-fluid' /> */}
                </div>
                <div className={`${styles.right} w-100`}>
                    <div className="d-flex flex-column py-3 ">
                        <span className='my-1' style={{color:'#6f4ab8'}}>blog article</span>
                        <span className={styles.headingSpan}>{heading}</span>
                        <span className={styles.simpleSpan}>{para}</span>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <span className={styles.date} > {date}</span>
                            <div  className='d-flex gap-3'>
                                <span className={styles.Lowerdate}><i className="fa fa-eye" aria-hidden="true"></i>{seen}</span>
                                <span className={styles.Lowerdate}><i className="fa fa-clock-o" aria-hidden="true"></i> {time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogItem