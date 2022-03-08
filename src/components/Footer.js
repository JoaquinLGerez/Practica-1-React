import React from 'react'
import logo from '../assets/img/logo-DH.png';


const Footer = () => {
  return (
<footer  className="pie">
    <nav id="{logo}">
    <a href="#a"><img className='logodh' src={logo} alt="Logo Digital House"/></a>
    </nav>
    <nav id="opciones">
        <ul>
            <li><a href="#a">facebook</a></li>
            <li><a href="#a">Instagram</a></li>
        </ul>
    </nav>
</footer>  )
}

export default Footer