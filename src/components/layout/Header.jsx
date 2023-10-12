
import React from 'react'
import NavbarMobile from '../modules/NavbarMobile'
import ButtonHeader from '../modules/ButtonHeader'
import headerButtons from '@/data/headerButton'




const Header = () => {
  return (
    <header>    
        <NavbarMobile /> 

        <div className='header-row'>
            {headerButtons.map((item , index) => (
              <ButtonHeader key={index}  {...item} /> 
            ) )}
        </div>
    </header>
  )
}

export default Header