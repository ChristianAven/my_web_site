import React from 'react'
import CardHeader from '../../components/cardHeader/CardHeader'
import './ProjectsScreen.css'

const ProjectsScreen = () => {

    const projects = [
        {
            name: "CountryInfo",
            technology: "React native",
            date: "29/10/2021",
            repository: "https://github.com/ChristianAven/CountryInfo"
        },
        {
            name: "RutasApp",
            technology: "React native",
            date: "23/07/2021",
            repository: "https://github.com/ChristianAven/RutasApp"
        },
        {
            name: "React-native-peliculas",
            technology: "React native",
            date: "29/06/2021",
            repository: "https://github.com/ChristianAven/React-native-peliculas"
        },
        {
            name: "Chat-frontend",
            technology: "React JS",
            date: "08/02/2021",
            repository: "https://github.com/ChristianAven/chat-frontend"
        },
        {
            name: "Chat-backend",
            technology: "Node JS - Socket.IO",
            date: "08/02/2021",
            repository: "https://github.com/ChristianAven/Chat-backend"
        },
        {
            name: "Tickets-sockets-frontend",
            technology: "React JS",
            date: "24/01/2021",
            repository: "https://github.com/ChristianAven/tickets-sockets-frontend"
        },
        {
            name: "Tickets-sockets-backend",
            technology: "Node JS - Socket.IO",
            date: "24/01/2021",
            repository: "https://github.com/ChristianAven/tickets-sockets-backend"
        },
        {
            name: "Maps-sockets-frontend",
            technology: "React JS",
            date: "26/01/2021",
            repository: "https://github.com/ChristianAven/Maps-sockets-frontend"
        },
        {
            name: "Maps-sockets-backend",
            technology: "Node JS - Socket.IO",
            date: "26/01/2021",
            repository: "https://github.com/ChristianAven/maps-sockets-backend"
        },
        {
            name: "This web site",
            technology: "React JS",
            date: "02/11/2021",
            repository: "https://github.com/ChristianAven/my_web_site"
        },
    ]

    return (
        <div className='animate__animated animate__zoomIn card'>
            <CardHeader icon='fas fa-clipboard-list' title='My projects' />

            <div className='card_body_projects'>
                <table className='table_projects'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Technology</th>
                            <th>Date</th>
                            <th>Repository GitHub</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map(({name, technology, date, repository}) => (
                                <tr key={name+technology} className='tr_project'>
                                    <td><a href={repository} className='name_link'>{name}</a></td>
                                    <td>{technology}</td>
                                    <td>{date}</td>
                                    <td><div className='div_repository_icon'><a href={repository}><i className="far fa-share-square repository_icon"></i></a></div></td>
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
