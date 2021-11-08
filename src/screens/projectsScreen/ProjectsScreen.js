import React from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import './ProjectsScreen.css'


const {default: projects} = require('../../assets/data/projects');

const ProjectsScreen = () => {

    return (
        <div className='animate__animated animate__zoomIn card'>
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
                                    <td className='td_name'><a href={repository} className='name_link'>{name}</a></td>
                                    <td className='td_technology'>{technology}</td>
                                    <td className='td_date'>{date}</td>
                                    <td className='td_repository'><div className='div_repository_icon'><a href={repository}><i className="far fa-share-square repository_icon"></i></a></div></td>
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
