import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import my_photo from '../../assets/my_photo.jpg'
import MenuLink from '../menuLink/MenuLink'

const Header = ({children}) => {

    const [navMenuOpen, setNavMenuOpen] = useState(false);  

    const changeWidthNav = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    return (
        <div id="header_nav">
        <nav >
          <div className={(!navMenuOpen) ? 'navClose' : 'navOpen'}>
            
            <div className='title_name'>
              <div>
                <img className='img_my_photo' src={my_photo} />
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
          <header className='header'>
            <div className="input_nav">
              <button 
                className="handle_button" 
                id="handleX"
                onClick={changeWidthNav}
              >
                <i className={(!navMenuOpen) ? "fas fa-arrow-right menu_icon_open" : "fas fa-arrow-right menu_icon_close"}></i>
              </button>
            </div>
            <div className='div_portfolio'>
              <h2>Christian David Avendaño</h2>
            </div>
          </header>
          <div>
            {children}
          </div>
      </div>
      </div>
    )
}

export default Header
