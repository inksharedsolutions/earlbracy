import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = ()=>{
    return(
        <>  
            <footer className="footer-section">
                <div className="container-gt" id="footer-info">
                    <h1>Earl Bracy</h1>
                    <p className="param-footer">
                        Earl Bracy loves to hear from readers. You can reach him via email. 
                        Feel free to send questions about writing, his works, interviews 
                        and other publicity matters.
                    </p> 

                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/StrattonPressInc/"
                                   target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a 
                                    target="_blank"
                                    href="https://twitter.com/strattonpress/" rel="noreferrer">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a  
                                    target="_blank"
                                    href="https://www.instagram.com/strattonpress/" rel="noreferrer">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a 
                                    target="_blank"
                                    href="https://www.goodreads.com/book/show/55347491-the-making-of-a-black-psychologist?from_search=true&from_srp=true&qid=a9Z9CEKWSi&rank=4" rel="noreferrer">
                                    <FontAwesomeIcon 
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="two-grid-column">
                        <p>Copyright 2020. Stratton Press</p>

                        <ul>
                            <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="/terms-and-conditions">Terms & Conditions</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;