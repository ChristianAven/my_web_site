import React, { useContext } from 'react'
import { CardLinkHome } from '../../components/cardLinkHome/CardLinkHome'
import { DarkModeContext } from '../../context/DarkModeContext'
import './homeScreen.css'

const {default: navLinks} = require("../../assets/data/navLinks")

const HomeScreen = () => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <div className='card card_fondo_home card_body_home' style={ darkMode ? {backgroundImage: "none", backgroundColor: "#4b525d"} : {} }>

            {
                navLinks.map(({parameter, icon, title}) => (
                    <CardLinkHome key={parameter} parameter={parameter} icon={icon} title={title} />
                ))
            }
            
        </div>
    )
}

export default HomeScreen
