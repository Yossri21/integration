import React from 'react'
import logo from '../../images/logo.png'
import styles from "../../css/navbar.module.css"
import { Link } from "gatsby"


const Navbar = () => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Logo Placement </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className={` nav-link ${styles.navbarNavLink} `} to="/">Lorum Ipsum</Link>
            </li>
            <li className="nav-item active">
            <Link className={` nav-link ${styles.navbarNavLink} `} to="/">Lorum Ipsum</Link>
            </li>
            <li className="nav-item active">
            <Link className={` nav-link ${styles.navbarNavLink} `} to="/">Lorum Ipsum</Link>
            </li>
            <li className="nav-item active">
            <Link className={` nav-link ${styles.navbarNavLink} `} to="/">Lorum Ipsum</Link>
            </li>
            <li className="nav-item active">
            <Link className={` nav-link ${styles.navbarNavLink} `} to="/">Lorum Ipsum</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      
    )
}

export default Navbar
