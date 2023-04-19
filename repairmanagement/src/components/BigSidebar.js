import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import LogoSide from '../components/Logoside'

const BigSidebar = () => {

  const {showSidebar, toggleSidebar} = useAppContext()
  return (
    <Wrapper>
        <div className={showSidebar?'sidebar-container show-sidebar':'sidebar-container'}>
          <div className="content">
            <header>
              <LogoSide/>
            </header>
            <NavLinks toggleSidebar={toggleSidebar}/>
          </div>
        
        </div>
    </Wrapper>
  )
}

export default BigSidebar
