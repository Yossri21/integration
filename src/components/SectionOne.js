import React from "react"
import Styless from "../css/sectionOne.module.css"
import {Link} from "gatsby"
import {graphql , useStaticQuery} from "gatsby"
import Img from "gatsby-image"


const getImage = graphql`
query Image {
    fluid:file(relativePath: {eq: "corona.PNG"}) {
      childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
`

const SectionOne = () => {
    const data = useStaticQuery(getImage);
  return (
    <div className="container">
        <div className={Styless.padd}>
      <div className="row">
        <div className="col-sm-6">
          <h5 className={Styless.fonts}> Lorem ipsum dolor sit amet, consectetur adipisici elit </h5>
          <h6 className={Styless.colorSection}>
            EIUSMOD TEM POR INCIDUNT UT LABORE ET DO LORE MAGNA SED EIUSMOD TEM
            POR INCIDUNT UT LABORE ET DO LORE MAGNA ALIQUA
          </h6>
          <p>
            Lamm ipsum dolor sit amet, consectetur adipisici eat, sed oiusmod
            tempo( Incidunt ut labore et dolore magna about Quo usque tandem
            abutere, Calm, debonair nostril' Me non permits( nullum lestiviceem
            excogitasso ad hoc. Lawn Ipsum dolor sat time, consectetur adipisici
            ehl sed elusrnod tempor IncIdum ut labor° et dolore magna aliqua.
            Quo usque tandem abutere, Cabana, pationtia nosua? Me non paenitet
            nullum festheaem excogrtasse ad hoc.
          </p>
               
          <Link className={Styless.link}  to="/"> Lorum Ipsum </Link>
          

        </div>
        <div className="col-sm-6" >
            <div className="container">
         <div className={Styless.imgo}>
         <Img fluid={data.fluid.childImageSharp.fluid}/>
         </div>
         </div>
        </div>
      </div>
    </div>
  
      

    </div>
  )
}

export default SectionOne
