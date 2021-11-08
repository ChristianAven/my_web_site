import React from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import resume from '../../assets/cv.PNG'
import './resumeScreen.css'


const {default: skills} = require("../../assets/data/skills");

const ResumeScreen = () => {

    return (
        <div className='animate__animated animate__zoomIn card'>
            
            <CardHeader icon='fas fa-align-justify' title='My resume' />
            
            <div className='card_body'>
                <div>
                    <div className='card_resume'>
                        <div className='card_img'>
                            <div className='img' />
                            <div className='div_link'>
                                <a className='link_resume' href={resume} download><i className="fas fa-download link_resume_icon"></i></a>
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
                                        skills.map(({name, year}) => (
                                            <tr key={name + year} className='tr_skills'>
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
