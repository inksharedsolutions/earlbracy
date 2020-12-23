import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book1-min.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span id="color-o">
                                                The Making Of A
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span>
                                                Black
                                            </span>
                                            <span id="color-o">
                                                Psychologist
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    This book brings to life the struggles that black people, especially in the Deep South, had to endure at the hands of a white society that relegated them to second-class citizenship. Against all odds, many southern blacks were able to rise above hatred and bigotry.
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner} alt="book"/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;