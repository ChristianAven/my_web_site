import React, { useContext } from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import { DarkModeContext } from '../../context/DarkModeContext';
import './ProjectsScreen.css'


const {default: projects} = require('../../assets/data/projects');

const ProjectsScreen = () => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <div className={`animate__animated animate__zoomIn ${darkMode? "card_dark_mode" : "card"}`}>
            <CardHeader icon='fas fa-clipboard-list' title='My projects' />

            <div className='card_body_projects'>
                <table className='table_projects'>
                    <thead>
                        <tr>
                            <th className='th_name'>Name</th>
                            <th className='th_technology'>Technology</th>
                            <th className='th_date'>Date</th>
                            <th className='th_repository'>Repository GitHub</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map(({name, technology, date, repository}) => (
                                <tr key={name+technology} className='tr_project'>
                                    <td className='td_name'>
                                        <a translate="no" href={repository} className='name_link' style={darkMode ? {color: "#fff"} : {}}>{name}</a>
                                    </td>
                                    
                                    <td className='td_technology' translate="no">{technology}</td>
                                    <td className='td_date'>{date}</td>
                                    <td className='td_repository'>
                                        <div className='div_repository_icon' >
                                            <a href={repository}>
                                                <i className="far fa-share-square repository_icon" style={darkMode ? {color: "#fff"} : {}}></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsScreen
