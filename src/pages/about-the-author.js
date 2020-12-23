import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-profile.png'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Earl Bracy"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                <span className="ata-span-fx">
                                    "In spite of having to attend a separate and unequal school,starting in first grade,I feel that we had black teachers who were qualified to teach.They were also caring and they also taught us to strive for excellence"
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                                Focus: <br />
                                <ul>
                                    <li>- Adolescents and families</li>
                                    <li>- Stress management</li>
                                    <li>- Grief and Bereavement</li>
                                    <li>- Sexual Abuse issues</li>
                                    <li>- Anger Management</li>
                                    <li>- Consultation</li>
                                    <li>- Grief and Bereavement</li>
                                    <li>- Facilitation of Foster Parent Clinics</li>
                                    <li>- Workshops in the area of bereavement,stress management,violence and other topics pertaining to mental health</li>
                                </ul>
                            </p>

                            <p>
                                Education: <br />
                                University of Wisconsin-Milwaukee<br />
                                <ul>
                                    <li>- B.A. Psychology</li>
                                    <li>- Illinois School of Professional Psychology</li>
                                    <li>- M.A. Clinical Psychology</li>
                                    <li>- Illinois School of Psychology</li>
                                    <li>- Doctorate,Clinical Psychology</li>
                                </ul>
                            </p>

                            <p>
                                Professional Experience<br />
                                <ul>
                                    <li>- Licensed Clinical Psychologist(February 2001-present) Private Practice</li>
                                    <li>- Therapy Practicum(1 year)Warrenville Correctional Facility(Adolescent males and females)Warrenville,Illinois.</li>
                                    <li>- Psychology Diagnostic Practicum(1 year) Englewood Mental Health Center,Chicago,Illinois.</li>
                                    <li>- Pre-Doctoral internship in Clinical Psychology at Ethan Allen School in Wales,Wisconsin and Southern Oaks Girl's School in Union Grove,Wisconsin.</li>
                                    <li>- Post Doctoral internship at Ethan Allen School,Wales,Wisconsin.</li>
                                    <li>- Consulting Psychologist for Ethan Allen School</li>
                                </ul>
                            </p>

                            <p>
                                Published Books:<br />
                                <ul>
                                    <li>- Too Young to Die:Inner City Adolescent Homicides(A Psychological Investigation)</li>
                                    <li>- The Making of a Black Psychologist</li>
                                    <li>- The Middle Generation Syndrome(A Throw Away Society) co-author</li>
                                </ul>
                            </p>

                            <p>
                                Accomplishments:<br />
                                <ul>
                                    <li>- Trained in the U.S. Army as a combat medic and surgical technician during the Vietnam War</li>
                                    <li>- Employed as a surgical technician at several Army hospitals and St.Joseph's and St. Lukes's Hospitals in Milwaukee,Wisconsin</li>
                                    <li>- Trained and worked as a cardiovascular perfusionist at several hospitals in the Milwaukee area.(1980-1996)</li>
                                    <li>- A strong adherence to the medical model</li>
                                    <li>- Consultant to several mental health agencies in the Milwaukee area</li>
                                    <li>- 2006 Community Trailblazer Award</li>
                                    <li>- 2010 Brother Booker Ashe lay Ministry Program(Certificate Program)</li>
                                    <li>- 2012 PBS interview,Black Nouveau) Channels 10 and 36,Milwaukee,Wi.</li>
                                    <li>- 2010 Black Child Development Institute,Children's Legacy Award,in the catergory of mental health</li>
                                    <li>- Consulting Psychologist to Milwaukee Job Corps</li>
                                    <li>- CBS News:Channel 58.Eye to eye(In Studio Interview)Feb. 2012</li>
                                    <li>- WXKS,Minority Counter Point(radio interview)Boston,Ma. 2012</li>
                                    <li>- The Huffington Post(interview)Expert Commentary,Feb.2013</li>
                                    <li>- Milwaukee Journal Sentinel,On Milwaukee.com,Feb.2013</li>
                                    <li>- NPR Wisconsin Public Radio,At Issue,(in studio interview)Feb,2013</li>
                                    <li>- WTMJ-TV,The Morning Blend.(NBC,Milwaukee,Wi.(in studio interview)Feb. 2013</li>
                                    <li>- WTMJ-Wisconsin Tonight.NBC,Milwaukee,Wi.(In studio interview)Feb.2013</li>
                                    <li>- KDKA-AM News talk 1020,CBS,(Radio interview)Racism in America,Pittsburg,Pa.April 2013</li>
                                    <li>- 90.7(Radio interview)Portland,Oregon August,2013</li>
                                    <li>- Recipient of the Mary Ellen Strong Foundtion 2018 service award in mental health</li>
                                </ul>
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Dr. Earl Bracy
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;