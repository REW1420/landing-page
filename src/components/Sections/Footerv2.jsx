import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from "react-scroll";
class Footerv2 extends Component {
  render() {
    //jason 
    const resumeData = {
      social: [
        {
          name: "facebook",
          url: "https://github.com/nordicgiant2/react-nice-resume",
          className: "fa-brands fa-facebook whiteColor"
        },


        {
          name: "instagram",
          url: "http://instagram.com/tbaker_x",
          className: "fa-brands fa-instagram whiteColor"
        },
        {
          name: "youtube",
          url: "https://github.com/nordicgiant2/react-nice-resume",
          className: "fa-brands fa-youtube whiteColor"
        }
      ]
    }

    const networks = resumeData.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    const scrollToSection = (event, id) => {
      event.preventDefault();
      const target = document.getElementById(id);
      target.scrollIntoView({ behavior: 'smooth' });
    };

    const getCurrentYear = () => {
      return new Date().getFullYear();
    }
    return (
      <footer className="lightBlueBg">
        <div className="row ">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright {getCurrentYear()} Fundacion Emprende Hoy</li>
               
              </ul>
            </div>
          </Fade>

          <div id="go-top">
          <Link to="home" smooth duration={1000} offset={-50}>
            <a className="smoothscroll " style={{ display: "grid", placeItems: "center" }}
             title="Back to Top">
           
             
           <i class="fa-solid fa-chevron-up"></i>
            </a>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footerv2;
