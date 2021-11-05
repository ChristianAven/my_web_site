import React from 'react'

const CardHeader = ({icon, title}) => {
    return (
        <div>
            <div className='div_title'>
                <div>
                    <i className={`${icon} icon_title`}></i>
                </div>
                <div>
                    <h2 className='title_page'>{title}</h2>
                </div>
            </div>
            
            <hr className='hr_title'/>
        </div>
    )
}

export default CardHeader
