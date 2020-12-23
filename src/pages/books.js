import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book1-min.png'
import Book2 from '../../static/book/book2-min.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'earl-bracy',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Earl Bracy"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Making Of A Black Psychologist`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'black-psychologist',
                                    content:
                                    `This book brings to life the struggles that black people, especially in the Deep South, had to endure at the hands of a white society that relegated them to second-class citizenship. Against all odds, many southern blacks were able to rise above hatred and bigotry. This book traces the life of a black clinical psychologist as he makes his northern migration and encounters even a deeper form of racial hatred and bigotry. This book touches the core of one's soul and will change your heart in a way that you've never imagined.
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/the-making-of-a-black-psychologist-dr-earl-bracy/1137465235?ean=9781648951589',
                                        amazon :'https://www.amazon.com/Making-Black-Psychologist-Earl-Bracy-ebook/dp/B08FP1XRFN/ref=sr_1_1?dchild=1&keywords=9781648951589&qid=1599672257&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Making-Black-Psychologist-Dr-Bracy/dp/1648951570/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1599672257&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-making-of-a-black-psychologist-dr-earl-bracy/1137465235?ean=9781648951572',
                                        booksamillion:'https://www.booksamillion.com/p/Making-Black-Psychologist/Earl-Bracy/9781648951572?id=8086087508437',
                                    }
                                }}
                            />

                            <BookInfo
                                data={{
                                    title:`The Middle Generation Syndrome`,
                                    spanTitle: '(A Throw Away Society)',
                                    imgSrc: Book2,
                                    id:'black-psychologist',
                                    content:
                                    `Today, we live in a society where many adults in the middle generation have self-destructed. Their behavior is very disturbing and confusing to those around them. Due to their reckless and odd behavior, grandparents (their parents) are put in the position of having to care for the children of the middle generation parents. The middle generation absenteeism has put a tremendous strain on society that has, and will cause, a deep impact for generations to come. This book spells out the reasons for this malady and offers solutions.
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: '',
                                        amazon :'', 
                                    },
                                    paperback:{
                                        amazon:'',
                                        barnes:'',
                                        booksamillion:'',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;