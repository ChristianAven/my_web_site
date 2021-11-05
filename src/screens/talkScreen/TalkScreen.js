import React from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import './talkScreen.css';

const TalkScreen = () => {
    return (
        <div className='animate__animated animate__zoomIn card'>
            <CardHeader icon='far fa-comment-dots' title="Let's talk" />
            <div className='card_body'>
                <div className='socialNetworks'>

                    <div className='socialNetworks_item'>
                        <div>
                            <a className='link_linkedin' href='https://www.linkedin.com/in/chris-aven/' target='_blank' rel="noreferrer"  ><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div>
                            <p>Christian David Avendaño Mora</p>
                        </div>
                    </div>

                    <div className='socialNetworks_item'>
                        <div>
                            <a className='link_github' href='https://github.com/ChristianAven' target='_blank' rel="noreferrer" ><i className="fab fa-github"></i></a>
                        </div>
                        <div>
                            <p>ChristianAven</p>
                        </div>
                    </div>

                    <div className='socialNetworks_item'>
                        <div>
                            <a className='link_instagram' href='https://www.instagram.com/avenm_/?hl=es' target='_blank' rel="noreferrer" ><i className="fab fa-instagram"></i></a>
                        </div>
                        <div>
                            <p>avenm_</p>
                        </div>
                    </div>

                    <div className='socialNetworks_item'>
                        <div>
                            <a className='link_twiter' href='https://twitter.com/AVENNM_' target='_blank' rel="noreferrer" ><i className="fab fa-twitter"></i></a>
                        </div>
                        <div>
                            <p>AVENNM_</p>
                        </div>
                    </div>

                    <div className='socialNetworks_item'>
                        <div>
                            <a className='link_mail' href='mailto:chrisavendano0508gmail.com' target='_blank' rel="noreferrer" ><i className="far fa-envelope"></i></a>
                        </div>
                        <div>
                            <p>chrisavendano0508gmail.com</p>
                        </div>
                    </div>

                </div>

                <hr className='hr_vertical'/>

                <div className='div_text_talk'>
                    <p>I share my social networks so you can choose the one you prefer, I hope we can get to know each other better and work together, my availability is in the mornings and afternoons</p>
                </div>
            </div>
        </div>
    )
}

export default TalkScreen
