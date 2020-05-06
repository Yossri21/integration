import React from "react"
import styles from "../../css/footer.module.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left bg-light">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Logo Placement</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
              eiusmod tempor incidunt ut labore et. Lorem ipsum dolor sit amet,
              consectetur adipisici elit, sed eiusmod tempor incidunt ut labore
              et.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"></hr>
          <div className="col-md-3 mb-md-0 mb-3">
            <ul className="list-unstyled">
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

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
          </div>
        </div>
      </div>


      <div className={` py-4  ${styles.background}`}>
          <p> © 2020 Copyright: </p>
          <p> users | Time | Boum </p>
      </div>
    </footer>
  )
}

export default Footer
