import React from 'react'
import react from '../../assets/react.PNG'
import React_sockets from '../../assets/React-sockets.PNG' 
import css from '../../assets/css.PNG' 
import git from '../../assets/Git.PNG' 
import react_native from '../../assets/react-native.PNG' 
import scrum from '../../assets/scrum.PNG' 
import './certificatesScreen.css'

const CertificatesScreen = () => {

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
        <div className='animate__animated animate__zoomIn card'>
            <div className='certificates'>
                {
                    data.map(({img, name, id}) => (
                        <div className='card_certificate' key={id}>
                            <div>
                                <img className='img_certi' src={img}/>
                            </div>
                            <div className='title_download'>
                                <div>
                                    <h3>{name}</h3>
                                </div>
                                <div className='div_download'>
                                    <a href={img} download><i class="fas fa-download download_icon"></i></a>
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
