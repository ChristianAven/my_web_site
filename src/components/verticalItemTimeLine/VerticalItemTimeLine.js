import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import './VerticalItemTimeLine.css'

const VerticalItemTimeLine = ({ date, icon, title, subTitle, textBody }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: 'white', color: 'black', border: '3px solid #0a66c2' }}
            contentArrowStyle={{ borderRight: '7px solid  #0a66c2' }}
            date={date}
            dateClassName={"date_element"}
            iconStyle={{ color: 'black', border: '3px solid #0a66c2', backgroundColor: 'white' }}
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
