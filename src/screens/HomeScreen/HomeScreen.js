import React from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import 'animate.css';
import './homeScreen.css'

const HomeScreen = () => {
    return (
        <div className='animate__animated animate__zoomIn card'>
            
            <CardHeader icon='fas fa-user-tie' title='About me'/>

            <div className='card_body'>
                <div>
                    <div className='header_cardBody'>
                        <div>
                            <h4><i class="fas fa-signature header_cardBody_icon"></i> Full name: Christian David Avendaño Mora</h4>
                        </div>
                        <div>
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp; <i class="fas fa-birthday-cake header_cardBody_icon"></i> Date of birth: 2001-05-8</h4>
                        </div>
                        <div>
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp; <i class="far fa-flag header_cardBody_icon"></i> Nationality: Spanish - Colombian</h4>
                        </div>
                    </div>
                    <p><strong>»</strong> Hello! I am a systems engineer and I focus on frontend development with good knowledge in backend development.</p>
                    <p><strong>»</strong> I have the ability to propose new solutions and develop customer needs in order to obtain better results.</p>
                    <p><strong>»</strong> Technical and theoretical professional knowledge in different technologies (with their respective certificates), high commitment to projects, development and final delivery. analytical skills, leadership, teamwork and constant learning.</p>
                    <p><strong>»</strong> I would very much like that in my next project to be surrounded by a team which can learn too much from them and do what I am passionate about, programming and learning new things every day!</p>
                </div>
                <div className='contact_linkedin'>
                    <h4>More information in:</h4>
                    <a className='link_linkedin' href='https://www.linkedin.com/in/chris-aven/' target='_blank' rel="noreferrer"  ><i class="fab fa-linkedin"></i></a>
                    <a className='link_github' href='https://github.com/ChristianAven' target='_blank' rel="noreferrer" ><i class="fab fa-github"></i></a>
                </div>
            
            </div>
        </div>
    )
}

export default HomeScreen
