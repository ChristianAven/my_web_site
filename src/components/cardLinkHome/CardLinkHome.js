import React from 'react'
import { Link } from 'react-router-dom'

export const CardLinkHome = ({parameter, icon, title}) => {
    return (
        <Link className='card_iten_nav' to={parameter}>
            <div className='card_icon_nav'>
                <div>
                    <i className={`${icon} icon_homeScreen`}></i>
                </div>
            </div>
            <div className='card_title_nav'>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}
