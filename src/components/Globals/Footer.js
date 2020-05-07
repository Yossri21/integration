import React from "react"
import styles from "../../css/footer.module.css"
import { Link } from "gatsby"
import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="bg-light">
        <div className={`container bg-light ${styles.paddingFooter}`}>
          <div className="row">
            <div className="col-md-4 " >
              <h5 className="text-uppercase">Logo Placement</h5>
              <p className={styles.pStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                eiusmod tempor incidunt ut labore et. Lorem ipsum dolor sit
                amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
                labore et.
              </p>
            </div>
          
            <div className="col-md-4" >
              <ul className= {`list-unstyled ${styles.links}`}>
                <li>
                  <a href="#!">Lorem lpsum </a>
                </li>
                <li>
                  <a href="#!">Lorem lpsum</a>
                </li>
                <li>
                  <a href="#!">Lorem lpsum</a>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 ">
              
            <div className={styles.icons}>
                  {socialIcons.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    )
                  })}
                </div>


            </div>
          </div>
        </div>
      </div>

      <div className={` py-4  ${styles.background}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={`   ${styles.right}`}>
                <h6> © 2020 Copyright </h6>
              </div>
            </div>
            <div className="col">
              <div className={`${styles.left}`}>
                <h6> users | Time | Boum </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
