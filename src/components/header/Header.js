import React, { useContext, useState } from 'react'
import './header.css'
import my_photo from '../../assets/my_photo.jpg'
import MenuLink from '../menuLink/MenuLink'
import { DarkModeSwich } from '../darkModeSwich/DarkModeSwich'
import { DarkModeContext } from '../../context/DarkModeContext'

const Header = ({children}) => {

    const [navMenuOpen, setNavMenuOpen] = useState(false);  
    const {darkMode, changeDarkMode} = useContext(DarkModeContext)

    const changeWidthNav = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    const onChangeDarkMode = (value) => {
      changeDarkMode(value.target.checked)
      console.log("dark mode true/false", darkMode);
    }

    return (
        <div id="header_nav">
        <nav >
          <div className={(!navMenuOpen) ? 'navClose' : 'navOpen'} style={darkMode ? {backgroundImage: "linear-gradient(to bottom, #4d5560, #424953, #373d46, #2c323a, #22272e)"} : {}}>
            
            <div className='title_name'>
              <div>
                <img className='img_my_photo' src={my_photo} alt='Christian David Avendaño Mora'/>
              </div>
              <div>
                <h3 className={(!navMenuOpen) ? 'name_close' : 'name' }>Christian David Avendaño Mora</h3>
              </div>
            </div>
            
            <hr className='hr_header' />

            <MenuLink Parameter='/'             title='Home'                 icon='fas fa-home'           menuOpen={navMenuOpen} />
            <MenuLink Parameter='/about'        title='About me'             icon='fas fa-user-tie'       menuOpen={navMenuOpen} />
            <MenuLink Parameter='/projects'     title='My projects'          icon='fas fa-clipboard-list' menuOpen={navMenuOpen} />
            <MenuLink Parameter='/certificates' title='My certificates'      icon='fas fa-certificate'    menuOpen={navMenuOpen} />
            <MenuLink Parameter='/resume'       title='My resume'            icon='fas fa-align-justify'  menuOpen={navMenuOpen} />
            <MenuLink Parameter='/now'          title='What am I doing now?' icon='fas fa-pencil-alt'     menuOpen={navMenuOpen} />
            <MenuLink Parameter='/talk'         title="Let's talk"           icon='far fa-comment-dots'   menuOpen={navMenuOpen} />

          </div>
        </nav>
        <div className='header_body'>
          
          <header className='header' style={darkMode ? {backgroundColor: "#2d333b"} : {}} >
          
            <div className="input_nav">
              <button 
                className="handle_button" 
                id="handleX"
                onClick={changeWidthNav}
              >
                <i style={darkMode ? {color: "#fff"} : {}} className={(!navMenuOpen) ? "fas fa-arrow-right menu_icon_open" : "fas fa-arrow-right menu_icon_close"}></i>
              </button>
            </div>
          
            <div className='div_portfolio' style={darkMode ? {color: "#fff"} : {}}>
              <h2>Christian David Avendaño Mora</h2>
            </div>
            
            <DarkModeSwich onChange={(value) => onChangeDarkMode(value)}/>
          
          </header>
          <div style={darkMode ? {backgroundColor: "#252a32"} : {}}>
            {children}
          </div>
      </div>
      </div>
    )
}

export default Header
