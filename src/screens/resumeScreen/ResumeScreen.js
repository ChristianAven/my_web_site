import React from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import resume from '../../assets/cv.PNG'
import './resumeScreen.css'

const ResumeScreen = () => {
    const skills = [
        {
            name: "React JS",
            year: "2020"
        },
        {
            name: "Sockets",
            year: "2020"
        },
        {
            name: "Mongo DB",
            year: "2019"
        },
        {
            name: "React Native",
            year: "2021"
        },
        {
            name: "Git-GitHub",
            year: "2019"
        },
        {
            name: "Node JS",
            year: "2019"
        },
        {
            name: "Express",
            year: "2019"
        },
        {
            name: "POO",
            year: "2018"
        },
        {
            name: "Scrum",
            year: "2021"
        },
        {
            name: "CSS",
            year: "2018"
        },
        {
            name: "HTML",
            year: "2017"
        },
        {
            name: "JavaScript",
            year: "2018"
        },
        {
            name: "Java",
            year: "2019"
        },
        {
            name: "C#",
            year: "2020"
        },
        {
            name: "Python",
            year: "2019"
        },
        {
            name: "SQL",
            year: "2020"
        },
        {
            name: "Redux",
            year: "2020"
        },
    ]

    const data_first_half = skills.splice(0, (skills.length / 2));
    const data_second_half = skills.splice(0, skills.length);

    return (
        <div className='animate__animated animate__zoomIn card'>
            
            <CardHeader icon='fas fa-align-justify' title='My resume' />
            
            <div className='card_body'>
                <div>
                    <div className='card_resume'>
                        <div className='card_img'>
                            <div className='img' />
                            <div className='div_link'>
                                <a className='link_resume' href={resume} download><i class="fas fa-download link_resume_icon"></i></a>
                            </div>
                        </div>
                        <h2 className='title_card_resume'>My resume</h2>
                    </div>
                </div>

                <hr className='hr_vertical'/>

                <div className='div_skills'>
                    <h2>These are my skills</h2>
                    <div className='tables'>
                        <div>
                            <table>
                                <thead>
                                    <tr className='tr_header'>
                                        <th>Name</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_first_half.map(({name, year}) => (
                                            <tr className='tr_skills'>
                                                <td className='td_skills'>{name}</td>
                                                <td className='td_skills'>{year}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <table>
                                <thead>
                                    <tr className='tr_header'>
                                        <th>Name</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_second_half.map(({name, year}) => (
                                            <tr className='tr_skills'>
                                                <td className='td_skills'>{name}</td>
                                                <td className='td_skills'>{year}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeScreen
