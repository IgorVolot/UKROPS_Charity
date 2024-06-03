/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/


import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo_small from "../../assets/logo/icon_ukrops-2x.png"
import { logoStyle } from "../../utils/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import style from "./navigation.module.css"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import NavDropdown from "react-bootstrap/NavDropdown"

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false)
  useLocation()
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 20)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand}
                className={`${style.navbar} pb-1 ${!visible && style.navbarHidden}`}>
          <Container fluid className={`${style.mainContainer}`}>
            <Navbar.Brand className={`${style.navbarBrand}`} href="/home"><img src={logo_small} style={logoStyle} alt="small_logo" /></Navbar.Brand>
            <Navbar.Toggle className={`${style.navbarToggler}`} aria-controls={`navbarResponsive-${expand}`} />
            <Navbar.Collapse id={`navbarResponsive-${expand}`}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink id={style.homeLink} className={`${style.navLink}`} to="/home">
                  Home
                </NavLink>
                <NavLink className={`${style.navLink} ${style.aboutUs}`} to="/about_us">
                  About Us
                </NavLink>
                <span
                  className={`dropdown ${showDropdown ? "show" : ""}`}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <a
                    className={`nav-link dropdown-toggle ${style.navLink}`}
                    id="aboutUsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={false}
                  />
                  <div className={`dropdown-menu ${showDropdown ? "show" : ""} ${style.menu}`}
                       aria-labelledby="aboutUsDropdown">
                    <NavDropdown.Item className="dropdown-item" href="/leo">Dr. Leo</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item" href="/anna">Dr. Anna</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item" href="/justas">Dr. Justas</NavDropdown.Item>
                  </div>
                </span>
                <NavLink className={`${style.navLink} ${style.mission}`} to="/our_mission">
                  Our Mission
                </NavLink>
                <NavLink className={`${style.navLink}`} to="/our_projects">
                  Our Projects
                </NavLink>
                <NavLink className={`${style.navLink} pe-4 pb-4`} to="/contacts">
                  Contacts
                </NavLink>
                <div className="d-flex align-items-center">
                  <Nav.Link
                    href="https://www.linkedin.com/in/leo-krivski-3b1a47239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apph"
                    target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon}`} icon={faLinkedin} style={{ color: "#FFD43B" }} />
                  </Nav.Link>
                  <Nav.Link href="https://www.facebook.com/profile.php?id=100009578859571" target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon} `} icon={faFacebook} style={{ color: "#FFD43B" }} />
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/krivski?igsh=a3F6cTEzYm0yYTl5&utm_source=qr" target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon} `} icon={faSquareInstagram}
                                     style={{ color: "#FFD43B" }} />
                  </Nav.Link>
                  <Nav.Link href="">
                    <FontAwesomeIcon className={`${style.navIcon} `} icon={faYoutube} style={{ color: "#FFD43B" }} />
                  </Nav.Link>
                  <Nav.Link href="mailto:leo@ukropsmedical.org">
                    <FontAwesomeIcon className={`${style.navIcon}`} icon={faEnvelope} style={{ color: "#FFD43B" }} />
                  </Nav.Link>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation
