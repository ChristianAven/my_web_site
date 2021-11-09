import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardHeader from '../../components/cardHeader/CardHeader'
import VerticalItemTimeLine from '../../components/verticalItemTimeLine/VerticalItemTimeLine';
import './nowScreen.css'

const NowScreen = () => {
    return (
        <div className='animate__animated animate__zoomIn card'>
            <CardHeader icon='fas fa-user-tie' title='What am I doing now?'/>

            <div>
                <VerticalTimeline lineColor='#0a66c2' >
                    
                    <VerticalItemTimeLine 
                        date={"Present - 2021/December"} 
                        icon={<i className="fab fa-react"></i>} 
                        subTitle="With certificate"
                        title="React JS advanced"
                        textBody="Storybook, Github Actions, publish NPM, TypeScript, component patterns, PWA, Formik, dynamic forms, and more"
                    />
                    
                    <VerticalItemTimeLine 
                        date={"2022/January - 2022/May"} 
                        icon={<i className="fab fa-docker"></i>} 
                        subTitle="With certificate"
                        title="Docker"
                        textBody="Learn how to use Docker from the basics to Docker Compose, Docker Swarm, and Kubernetes"
                    />
                    
                    <VerticalItemTimeLine 
                        date={"2022/June - 2022/December"} 
                        icon={<i className="fab fa-aws"></i>} 
                        subTitle="With certificate"
                        title="AWS"
                        textBody="EC2, Light Sail, Elastic Beanstalk, EKS, AWS Lambda, DMS, SMS, Snowball, Amazon Glacier, Amazon Elastic Block Store (EBS) and more"
                    />
                    
                    <VerticalItemTimeLine 
                        date={"2023/January - 2023/June"} 
                        icon={<i className="fab fa-java"></i>} 
                        subTitle="With certificate"
                        title="Master in JAVA"
                        textBody="Java EE 9, CDI, JPA, EJB, Web and more"
                    />

                </VerticalTimeline>
            </div>

        </div>
    )
}

export default NowScreen
