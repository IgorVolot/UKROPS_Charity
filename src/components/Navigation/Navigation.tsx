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
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import NavDropdown from "react-bootstrap/NavDropdown"

function Navigation() {
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)

  useLocation()
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30) || currentScrollPos < 30)
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
            <Navbar.Brand className={`${style.navbarBrand}`}>
              <NavLink
                to="/home" onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                })
                navigate("/home")
              }}>
                <img src={logo_small} style={logoStyle} alt="small_logo" />
              </NavLink>

            </Navbar.Brand>
            <Navbar.Toggle className={`${style.navbarToggler}`} aria-controls={`navbarResponsive-${expand}`} />
            <Navbar.Collapse id={`navbarResponsive-${expand}`}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  to="/home"
                  id={style.homeLink}
                  className={`${style.navLink}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/home")
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about_us"
                  className={`${style.navLink} ${style.aboutUs}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/about_us")
                  }}
                >
                  About Us
                </NavLink>
                <span className={`dropdown ${showDropdown ? "show" : ""}`}>
                  <button
                    className={`nav-link dropdown-toggle ${style.navLink}`}
                    style={{ color: "rgb(238, 209, 176)" }}
                    id="aboutUsDropdown"
                    role="button"
                    onClick={toggleDropdown}
                    aria-haspopup="true"
                    aria-expanded={showDropdown}
                  >
                  </button>

                  <div className={`dropdown-menu ${showDropdown ? "show" : ""} ${style.menu}`}
                       aria-labelledby="aboutUsDropdown">
                    <NavDropdown.Item className={style.dropdownItem}>
                      <NavLink
                        to="/leo"
                        className={`${style.navLink} `}
                        style={{ color: "black", textDecoration: "none" }}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                          })
                          navigate("/leo")
                        }}
                      >
                        Dr. Leo Krivskiy
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={style.dropdownItem}>
                      <NavLink
                        to="/anna"
                        className={`${style.navLink} `}
                        style={{ color: "black", textDecoration: "none" }}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                          })
                          navigate("/anna")
                        }}
                      >
                      Dr. Anna Hunter
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={style.dropdownItem}>
                      <NavLink
                        to="/justas"
                        className={`${style.navLink} `}
                        style={{ color: "black", textDecoration: "none" }}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                          })
                          navigate("/justas")
                        }}
                      >
                      Dr. Justas Mazunaitis
                      </NavLink>
                    </NavDropdown.Item>
                  </div>
                </span>
                <NavLink
                  to="/our_mission"
                  className={`${style.navLink} ${style.mission}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/our_mission")
                  }}
                >
                  Our Mission
                </NavLink>
                <NavLink
                  to="/our_projects"
                  className={`${style.navLink}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/our_projects")
                  }}
                >
                  Our Projects
                </NavLink>
                <NavLink
                  to="/contacts"
                  className={`${style.navLink} pe-4 pb-4`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/contacts")
                  }}
                >
                  Contacts
                </NavLink>
                <div className="d-flex ">
                  <Nav.Link
                    href="https://www.linkedin.com/in/leo-krivski-3b1a47239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apph"
                    target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon}`} icon={faLinkedin} />
                  </Nav.Link>
                  <Nav.Link href="https://www.facebook.com/profile.php?id=100009578859571" target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon} `} icon={faFacebook} />
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/krivski?igsh=a3F6cTEzYm0yYTl5&utm_source=qr" target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon} `} icon={faSquareInstagram} />
                  </Nav.Link>
                  <Nav.Link href="https://www.youtube.com/@leosrow" target="_blank">
                    <FontAwesomeIcon className={`${style.navIcon} `} icon={faYoutube} />
                  </Nav.Link>
                  <Nav.Link href="mailto:leo@ukropsmedical.org">
                    <FontAwesomeIcon className={`${style.navIcon}`} icon={faEnvelope}  />
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
