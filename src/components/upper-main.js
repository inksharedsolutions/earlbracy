import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author-profile.png'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Dr. Earl Bracy</h1>
                                <span>Author & Writer</span>

                                <p>
                                    Focus:
                                    <ul>
                                        <li>- Adolescents and families</li>
                                        <li>- Stress management</li>
                                        <li>- Grief and Bereavement</li>
                                        <li>- Sexual Abuse issues</li>
                                        <li>- Anger Management</li>
                                        <li>- Consultation</li>
                                        <li>- Facilitation of Foster Parent Clinics</li>
                                        <li>- Workshops in the area of bereavement,stress management,violence and other topics pertaining to mental health</li>
                                    </ul>
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain