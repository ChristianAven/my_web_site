import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import my_photo from '../../assets/my_photo.jpg'

const Header = ({children}) => {

    const [navMenuOpen, setNavMenuOpen] = useState(true);  

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

            <NavLink activeClassName="active" exact to='/' className='link'>
              <div className='item_link'>
                <div className='item_link_title'>
                  <div>
                    <i class="fas fa-user-tie icon"></i>
                  </div>
                  <div>
                    <h3 className={(!navMenuOpen) ? 'link_label_close' : 'link_label' }>About me</h3>
                  </div>
                </div>
                <div>
                  <i class="fas fa-chevron-right arrow_icon"></i>
                </div>
              </div>
            </NavLink>

            <NavLink activeClassName="active" to='/certificates' className='link'>
              <div className='item_link'>
                <div className='item_link_title'>
                  <div>
                    <i class="fas fa-certificate icon"></i>
                  </div>
                  <div>
                    <h3 className={(!navMenuOpen) ? 'link_label_close' : 'link_label' }>My certificates</h3>
                  </div>
                </div>
                <div>
                  <i class="fas fa-chevron-right arrow_icon"></i>
                </div>
              </div>
            </NavLink>

            <NavLink activeClassName="active" to='/resume' className='link'>
              <div className='item_link'>
                <div className='item_link_title'>
                  <div>
                    <i class="fas fa-align-justify icon"></i>
                  </div>
                  <div>
                    <h3 className={(!navMenuOpen) ? 'link_label_close' : 'link_label' }>My resume</h3>
                  </div>
                </div>
                <div>
                  <i class="fas fa-chevron-right arrow_icon"></i>
                </div>
              </div>
            </NavLink>

            <NavLink activeClassName="active" to='/talk' className='link'>
              <div className='item_link'>
                <div className='item_link_title'>
                  <div>
                    <i class="far fa-comment-dots icon"></i>
                  </div>
                  <div>
                    <h3 className={(!navMenuOpen) ? 'link_label_close' : 'link_label' }>Let's talk</h3>
                  </div>
                </div>
                <div>
                  <i class="fas fa-chevron-right arrow_icon"></i>
                </div>
              </div>
            </NavLink>

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
                <i class={(!navMenuOpen) ? "fas fa-arrow-right menu_icon_open" : "fas fa-arrow-right menu_icon_close"}></i>
              </button>
            </div>
            <div className='div_portfolio'>
              <h2>Portfolio</h2>
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
