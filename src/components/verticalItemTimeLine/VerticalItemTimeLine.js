import React, { useContext } from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { DarkModeContext } from '../../context/DarkModeContext'
import './VerticalItemTimeLine.css'

const VerticalItemTimeLine = ({ date, icon, title, subTitle, textBody }) => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <VerticalTimelineElement
            contentStyle={darkMode ? {background: '#4b525d', color: 'white', border: '3px solid #252a32' } : { background: 'white', color: 'black', border: '3px solid #0a66c2' }}
            contentArrowStyle={{ borderRight: '7px solid  #0a66c2' }}
            date={date}
            dateClassName={ darkMode ? "date_element_dark_mode" : "date_element"}
            iconStyle={ darkMode ? { color: 'black', border: '3px solid #252a32', backgroundColor: '#a7adb4' } : { color: 'black', border: '3px solid #0a66c2', backgroundColor: 'white' }}
            icon={icon}
            iconClassName={"icon_element"}
            >
            <h3 translate="no" className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
            <p>
            {textBody}
            </p>
        </VerticalTimelineElement>
    )
}

export default VerticalItemTimeLine
