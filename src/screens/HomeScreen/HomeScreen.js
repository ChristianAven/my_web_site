import React from 'react'
import { Link } from 'react-router-dom'
import './homeScreen.css'

const HomeScreen = () => {
    return (
        <div className='card card_fondo_home card_body_home'>
            <Link className='card_iten_nav' to='/about'>
                <div className='card_icon_nav'>
                    <div>
                        <i className="fas fa-user-tie icon_homeScreen"></i>
                    </div>
                </div>
                <div className='card_title_nav'>
                    <h2>About me</h2>
                </div>
            </Link>

            <Link to='/projects' className='card_iten_nav'>
                <div className='card_icon_nav'>
                    <div>
                        <i className="fas fa-clipboard-list icon_homeScreen"></i>
                    </div>
                </div>
                <div className='card_title_nav'>
                    <h2>My projects</h2>
                </div>
            </Link>

            <Link to='/certificates' className='card_iten_nav'>
                <div className='card_icon_nav'>
                    <div>
                        <i className="fas fa-certificate icon_homeScreen"></i>
                    </div>
                </div>
                <div className='card_title_nav'>
                    <h2>My certificates</h2>
                </div>
            </Link>

            <Link to='/resume' className='card_iten_nav'>
                <div className='card_icon_nav'>
                    <div>
                        <i className="fas fa-align-justify icon_homeScreen"></i>
                    </div>

                </div>
                <div className='card_title_nav'>
                    <h2>My resume</h2>
                </div>

            </Link>
            <Link to='/now' className='card_iten_nav'>
                <div className='card_icon_nav'>
                    <div>
                        <i className="fas fa-pencil-alt icon_homeScreen"></i>
                    </div>

                </div>
                <div className='card_title_nav'>
                    <h2>What am I doing now?</h2>
                </div>

            </Link>
            <Link to='/talk' className='card_iten_nav'>
                <div className='card_icon_nav'>
                    <div>
                        <i className="far fa-comment-dots icon_homeScreen"></i>
                    </div>

                </div>
                <div className='card_title_nav'>
                    <h2>Let's talk</h2>
                </div>

            </Link>
        </div>
    )
}

export default HomeScreen
