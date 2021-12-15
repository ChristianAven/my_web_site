import { useContext } from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import 'animate.css';
import './aboutScreen.css'
import { DarkModeContext } from '../../context/DarkModeContext';
import myImg from '../../assets/my_photo.jpg'

const HomeScreen = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={`animate__animated animate__zoomIn ${darkMode? "card_dark_mode" : "card"}`}>
            
            <CardHeader icon='fas fa-user-tie' title='About me'/>

            <div className='card_body_my'>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className='card_general_information' style={darkMode ? {boxShadow: "none"} : {border: "1px solid #c4cad1"}}>
                        <div className='bg_card'/>
                        <div className='my_card_body_container'>
                            <div className='my_card_body'>
                                <div>
                                    <img className='my_photo' src={myImg}/>
                                </div>
                                <div>
                                    <span style={{color: "black"}}><strong>Christian David</strong> 20</span>
                                </div>
                                <div>
                                    <span style={{color: "black", fontSize: "13px"}}>Spanish - Colombian</span>
                                </div>
                                <hr color='#d1d1d1' style={{ width: '100%', height: "0px", marginTop: "35px"}}/>
                            </div>
                        </div>
                        <div className='my_card_footer'>
                            <div className='my_card_footer_item'>
                                <a className='link_linkedin' href='https://www.linkedin.com/in/chris-aven/' target='_blank' rel="noreferrer"  ><i className="fab fa-linkedin"></i></a>
                                <span><strong>Linkedin</strong></span>    
                            </div>
                            <div className='my_card_footer_item'>
                            <a className='link_twiter' href='https://twitter.com/AVENNM_' target='_blank' rel="noreferrer" ><i className="fab fa-twitter"></i></a>
                                <span><strong>Twitter</strong></span>
                            </div>
                            <div className='my_card_footer_item'>
                            <a className='link_github' href='https://github.com/ChristianAven' target='_blank' rel="noreferrer" ><i className="fab fa-github"></i></a>
                                <span><strong>Github</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: "60px", marginRight: "60px"}}>
                    <p><strong>»</strong> Hello! I am a systems engineer and I focus on frontend development with good knowledge in backend development.</p>
                    <p><strong>»</strong> I have the ability to propose new solutions and develop customer needs in order to obtain better results.</p>
                    <p><strong>»</strong> Technical and theoretical professional knowledge in different technologies (with their respective certificates), high commitment to projects, development and final delivery. analytical skills, leadership, teamwork and constant learning.</p>
                    <p><strong>»</strong> I would very much like that in my next project to be surrounded by a team which can learn too much from them and do what I am passionate about, programming and learning new things every day!</p>
                </div>
            
            </div>
        </div>
    )
}

export default HomeScreen
