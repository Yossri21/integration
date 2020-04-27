import React from 'react'
import logo from '../../images/logo.png'
import styles from "../../css/navbar.module.css"


const Navbar = () => {
    return (
    <nav  className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            Bootstrap </a>
    </nav>
      
    )
}

export default Navbar
