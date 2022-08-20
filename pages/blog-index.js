import React from 'react'
import BlogItem from '../Components/Blog/BlogItem'
import style from '../styles/BlogItem.module.css'
import PreFooter from '../Components/PreFooter'

const BlogIndex = () => {
    return (
        <>
            <div className={style.mainContainer}>

                <h1 className={style.pHeading}>Blog</h1>
                <div className={`container ${style.blogItemContainer} `}>
                    <div className="my-4">
                        <BlogItem image="/Images/bigstock/bigstock-Young-woman-using-digital-tabl-294797038.jpg" heading="l illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis " date=" January 21, 2022" seen="1,256" time="5mins" />
                    </div>
                    <div className="my-4">
                        <BlogItem image="/Images/bigstock/bigstock--207916777.jpg" heading="l illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis " date=" January 21, 2022" seen="1,256" time="5mins" />
                    </div>
                    <div className="my-4">
                        <BlogItem image="/Images/bigstock/bigstock-Salesman-In-Red-Shirt-And-Base-281473519.jpg" heading="l illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis " date=" January 21, 2022" seen="1,256" time="5mins" />
                    </div>
                    <div className="my-4">
                        <BlogItem image="/Images/bigstock/bigstock-Side-view-of-happy-Caucasian-m-308331265.jpg" heading="l illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis " date=" January 21, 2022" seen="1,256" time="5mins" />
                    </div>
                    <div className="my-4">
                        <BlogItem image="/Images/bigstock/bigstock-Startup-Small-Business-Owner-W-364891720.jpg" heading="l illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis " date=" January 21, 2022" seen="1,256" time="5mins" />
                    </div>
                    <div className="my-4">
                        <BlogItem image="/Images/bigstock/bigstock-two-young-workers-man-in-unifo-94624661.jpg" heading="l illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis " date=" January 21, 2022" seen="1,256" time="5mins" />
                    </div>
                </div>
                <nav aria-label="Page navigation example" className='py-4'>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <PreFooter heading={'SpamBurner™'} secondaryHeading="The only comprehensive solution for eliminating website spam." para={"Easy setup - no technical skills required or hidden costs"} secondaryButton={true} buttonText="Start My Free Trial Now" lastPara=""/>
        </>
    )
}

export default BlogIndex