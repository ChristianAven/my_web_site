import React, { useContext } from 'react'
import react from '../../assets/react.PNG'
import React_sockets from '../../assets/React-sockets.PNG' 
import css from '../../assets/css.PNG' 
import git from '../../assets/Git.PNG' 
import react_native from '../../assets/react-native.PNG' 
import scrum from '../../assets/scrum.PNG' 
import './certificatesScreen.css'
import { DarkModeContext } from '../../context/DarkModeContext'

const CertificatesScreen = () => {

    const {darkMode} = useContext(DarkModeContext)

    const data = [
        {
            img: react,
            name: "React JS",
            id: "1"
        },
        {
            img: React_sockets,
            name: "React with sockets",
            id: "2"
        },
        {
            img: react_native,
            name: "React Native",
            id: "3"
        },
        {
            img: scrum,
            name: "Scrum",
            id: "4"
        },
        {
            img: git,
            name: "Git",
            id: "5"
        },
        {
            img: css,
            name: "Css",
            id: "6"
        },

    ]

    return (
        <div className={`animate__animated animate__zoomIn ${darkMode? "card_dark_mode" : "card"}`}>
            <div className='certificates'>
                {
                    data.map(({img, name, id}) => (
                        <div className='card_certificate' style={darkMode ? {boxShadow: "none", color: "#4b525d"} : {}} key={id}>
                            <div style={{}}>
                                <img className='img_certi' src={img} alt='Certificate'/>
                            </div>
                            <div className='title_download'>
                                <div>
                                    <h3 translate="no">{name}</h3>
                                </div>
                                <div className='div_download'>
                                    <a href={img} download><i className="fas fa-download download_icon"></i></a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CertificatesScreen
