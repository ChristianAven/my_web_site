import React from 'react'
import { Link } from 'react-router-dom'
import { CardLinkHome } from '../../components/cardLinkHome/CardLinkHome'
import './homeScreen.css'

const {default: navLinks} = require("../../assets/data/navLinks")

const HomeScreen = () => {
    return (
        <div className='card card_fondo_home card_body_home'>

            {
                navLinks.map(({parameter, icon, title}) => (
                    <CardLinkHome key={parameter} parameter={parameter} icon={icon} title={title} />
                ))
            }
            
        </div>
    )
}

export default HomeScreen
