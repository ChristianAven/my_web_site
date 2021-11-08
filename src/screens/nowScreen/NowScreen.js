import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardHeader from '../../components/cardHeader/CardHeader'
import './nowScreen.css'

const NowScreen = () => {
    return (
        <div className='animate__animated animate__zoomIn card'>
            <CardHeader icon='fas fa-user-tie' title='What am I doing now?'/>

            <div>
                <VerticalTimeline lineColor='#bcbcbc' >
                    <VerticalTimelineElement
                        contentStyle={{ background: 'white', color: 'black', border: '3px solid rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Present - 2021/December"
                        dateClassName={"date_element"}
                        iconStyle={{ color: 'black', border: '3px solid #0a66c2', backgroundColor: 'white' }}
                        icon={<i className="fab fa-react"></i>}
                        iconClassName={"icon_element"}
                        >
                        <h3 className="vertical-timeline-element-title">React JS advanced</h3>
                        <h4 className="vertical-timeline-element-subtitle">With certificate</h4>
                        <p>
                        Storybook, Github Actions, publish NPM, TypeScript, component patterns, PWA, Formik, dynamic forms, and more
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: 'white', color: 'black', border: '3px solid rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2022/January - 2022/May"
                        icon={<i class="fab fa-docker"></i>}
                        iconStyle={{ color: 'black', border: '3px solid #0a66c2', backgroundColor: 'white' }}
                        iconClassName={"icon_element"}
                        >
                        <h3 className="vertical-timeline-element-title">Docker</h3>
                        <h4 className="vertical-timeline-element-subtitle">With certificate</h4>
                        <p>
                        Learn how to use Docker from the basics to Docker Compose, Docker Swarm, and Kubernetes
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: 'white', color: 'black', border: '3px solid rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2022/June - 2022/December"
                        icon={<i class="fab fa-aws"></i>}
                        iconStyle={{ color: 'black', border: '3px solid #0a66c2', backgroundColor: 'white' }}
                        iconClassName={"icon_element"}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: 'white', color: 'black', border: '3px solid rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023/January - 2023/June"
                        icon={<i class="fab fa-java"></i>}
                        iconStyle={{ color: 'black', border: '3px solid #0a66c2', backgroundColor: 'white' }}
                        iconClassName={"icon_element"}
                        >
                        <h3 className="vertical-timeline-element-title">Master in JAVA</h3>
                        <h4 className="vertical-timeline-element-subtitle">With certificate</h4>
                        <p>
                        Java EE 9, CDI, JPA, EJB, Web and more
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </div>
    )
}

export default NowScreen
