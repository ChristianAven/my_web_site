import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import './cardHeader.css'

const CardHeader = ({icon, title}) => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <div>
            <div className='div_title'>
                <div>
                    <i className={`${icon} icon_title`} style={ darkMode ? {color: "#a7adb4"} : {}}></i>
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
