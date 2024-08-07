/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import { useState } from "react"
import style from "./footer.module.css"
import cc_cert from "../../assets/logo/charity-commission_logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import img_ukrops from "../../assets/logo/img_ukrops.jpg"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { Link, NavLink, useNavigate } from "react-router-dom"

export default function Footer() {
  const navigate = useNavigate()
  const [showPrivacy, setShowPrivacy] = useState(false)
  const closePrivacy = () => setShowPrivacy(false)
  const showPrivacyModal = () => setShowPrivacy(true)

  const [showCookie, setShowCookie] = useState(false)
  const closeCookie = () => setShowCookie(false)
  const showCookieModal = () => setShowCookie(true)

  const [showTerms, setShowTerms] = useState(false)
  const closeTerms = () => setShowTerms(false)
  const showTermsModal = () => setShowTerms(true)

  return (
    <footer className={`${style.footer}`}>
      <div className="container">
        {/*Top Row for Logo/Images that changes layout based on screen size */}
        <div className="row align-items-center py-3">
          {/*Logo/Image on left on large screens and top on small screens */}
          <div className={`${style.imgContainer} col-md-3 order-md-1 order-2`}>
            <NavLink
              to="/home"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                })
                navigate("/home")
              }}
            >
              <img src={img_ukrops} alt="Logo" className={`${style.footerLogo}`} />
            </NavLink>
          </div>
          {/*Center Block for Navigation Links */}
          <div className="col-md-6 text-center order-md-2 order-1">
            <ul className="list-inline mb-0">
              <li className={style.listInlineItem}>
                <NavLink
                  to="/contacts"
                  className="link"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/contacts")
                  }}
                  style={{ color: "rgba(250,235,215,0.89)" }}
                >Contacts
                </NavLink>
              </li>

              <li className={style.listInlineItem}>
                <NavLink
                  to="/about_us"
                  className="link"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/about_us")
                  }}
                  style={{ color: "rgba(250,235,215,0.89)" }}
                >About Us
                </NavLink>
              </li>

              {/*... Terms Of Use Policy Link ...*/}
              <li className={style.listInlineItem}>
                <a
                  href="#terms"
                  onClick={showTermsModal}
                  className="text"
                  style={{ color: "rgba(250,235,215,0.89)" }}
                >Terms of Use
                </a>
                <Modal show={showTerms} onHide={closeTerms}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>Terms of Use</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any
                      part of the Terms, then you do not have our permission to access or use the Website.
                    </p>
                    <p>
                      By submitting a comment or uploading content onto this Website, you grant Leo Krivskiy a
                      worldwide, non-exclusive, perpetual, royalty-free license to reproduce, publish and distribute the
                      comment or content.
                    </p>
                    <h3>PROHIBITED USES</h3>
                    <p>
                      You agree that you will use this Website in accordance with all applicable laws, rules,
                      regulations and these Terms at all times. The following is a non-exhaustive list of prohibited
                      uses of this Website. You agree that you will not perform any of the following prohibited uses:
                    </p>
                    <p>
                      <NavLink className={"text-info"} to="/terms_of_use">read more...</NavLink>
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeTerms}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={closeTerms}>
                      Accept
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>

              {/*... Cookie Policy Link ...*/}
              <li className={style.listInlineItem}>
                <a
                  href="#cookies"
                  onClick={showCookieModal}
                  className="text"
                  style={{ color: "rgba(250,235,215,0.89)" }}
                >Cookie Policy
                </a>
                <Modal show={showCookie} onHide={closeCookie}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>Cookie Policy</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h3>WHAT ARE COOKIES?</h3>
                    <p>
                      A cookie is a small piece of data sent from a Website and stored on your device by your browser.
                    </p>
                    <p>
                      This Website collects the cookies identified below. We have classified the cookies that we collect
                      by the purpose that they serve.
                    </p>
                    <h3>ESSENTIAL COOKIES</h3>
                    <p>
                      Essential cookies are cookies that are essential for you to browse this Website and use its
                      features. For example, these cookies may be used for maintaining security, authenticating users,
                      and preventing fraudulent actions.
                    </p>
                    <h3>FUNCTIONAL COOKIES</h3>
                    <p>
                      Functional cookies are cookies that allow a Website to remember the choices that you have made in
                      the past and how you use the Website.
                    </p>
                    <p>
                      <NavLink className={"text-info"} to="/cookie_policy">read more...</NavLink>
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeCookie}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={closeCookie}>
                      Accept
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
              {/*... Privacy Policy Link ...*/}
              <li className={style.listInlineItem}>
                <a
                  href="#privacy"
                  onClick={showPrivacyModal}
                  className="text"
                  style={{ color: "rgba(250,235,215,0.89)" }}
                > Privacy Policy
                </a>
                <Modal show={showPrivacy} onHide={closePrivacy}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>Privacy Policy</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      By using this website, you agree to our use of cookies. We use cookies to provide you with a great
                      experience and to help our website run effectively.
                    </p>
                    <p>
                      By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree
                      with any part of the Privacy Policy, then you do not have our permission to access or use the
                      Website.
                    </p>
                    <p>
                      WHAT INFORMATION WE COLLECT, WHERE WE GET THIS INFORMATION, HOW WE USE THIS INFORMATION, WHAT
                      HAPPENS IF WE DON'T HAVE IT, AND THE LEGAL BASIS FOR PROCESSING THIS INFORMATION
                    </p>
                    <p>
                      <NavLink className={"text-info"} to="/privacy">read more...</NavLink>
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closePrivacy}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={closePrivacy}>
                      Accept
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </div>
          {/*Right side image/link on large screens and bottom on small screens */}
          <div className={`${style.imgContainer} col-md-3 order-md-3 order-3`}>
            <a
              href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5226224/charity-overview"
              rel="noopener noreferrer" target="_blank">
              <img src={cc_cert} alt="CC Certificate" className={`${style.footerImg}`} />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <ul className="list-inline mb-3">
              <li className="list-inline-item p-1">
                <Link
                  to="https://www.linkedin.com/in/leo-krivski-3b1a47239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank">
                  <FontAwesomeIcon className={`${style.linkIcon}`} icon={faLinkedin} size="xl" />
                </Link>
              </li>
              <li className="list-inline-item p-1">
                <Link to="https://www.facebook.com/profile.php?id=100009578859571" target="_blank">
                  <FontAwesomeIcon className={`${style.linkIcon}`} icon={faFacebook} size="xl" />
                </Link>
              </li>
              <li className="list-inline-item p-1">
                <Link to="https://www.instagram.com/krivski?igsh=a3F6cTEzYm0yYTl5&utm_source=qr" target="_blank">
                  <FontAwesomeIcon className={`${style.linkIcon}`} icon={faSquareInstagram} size="xl" />
                </Link>
              </li>
              <li className="list-inline-item p-1">
                <Link to="https://www.youtube.com/@leosrow" target="_blank">
                  <FontAwesomeIcon className={`${style.linkIcon}`} icon={faYoutube} size="xl" />
                </Link>
              </li>
              <li className="list-inline-item p-1">
                <Link to="mailto:leo@ukropsmedical.org">
                  <FontAwesomeIcon className={`${style.linkIcon}`} icon={faEnvelope} size="xl" />
                </Link>
              </li>
            </ul>
            <p className="mb-0">© {new Date().getFullYear()} UKROPS. All rights reserved.</p>
            <Link className={style.link}
                  to="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5226224/charity-overview?fbclid=IwAR1ttY_hAVWcnGXaZHIRr0zbdSb9dtBAGMh6j28lik7RayjiC68g_eMgA9k"
                  target="_blank">
            <p className="mb-0"> UKROPS Medical Charity Registered Charity in England and Wales (charity no.
                1205865).</p>
            </Link>
            <Link className={style.link} to="mailto:cz.it.design.studio@gmail.com">
              <p>Designed & built by Igor Volotovskyi</p>
              <p>© {new Date().getFullYear()} CZ IT-Design Studio</p>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}
