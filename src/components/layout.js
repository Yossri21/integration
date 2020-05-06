

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"
//import "./bootstrap.min.css";

import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
    <div className="container">
    <Navbar />
        {children}

      <Footer />
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
