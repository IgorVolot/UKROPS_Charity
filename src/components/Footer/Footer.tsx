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
import { faFacebook, faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import img_ukrops from "../../assets/logo/img_ukrops_small.jpg"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default function Footer() {

  // Inside your component body
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className={`${style.footer}`}>
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-md-3">
            <a href={"/home"} rel="noopener noreferrer">
              <img src={`${img_ukrops}`} alt="Logo" className={`${style.footerLogo} w-75 `} />
            </a>
          </div>
          <div className="col-md-6 text-center">
            <ul className="list-inline mb-0">
              <li className={style.listInlineItem}>
                <a href="#" onClick={handleShow} className="text" style={{ color: "rgba(250,235,215,0.89)" }}>Privacy
                  Policy</a>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>Privacy Policy</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                    </p>
                    <p>
                      By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of the Privacy Policy, then you do not have our permission to access or use the Website.
                    </p>
                    <p>
                      WHAT INFORMATION WE COLLECT, WHERE WE GET THIS INFORMATION, HOW WE USE THIS INFORMATION, WHAT HAPPENS IF WE DON'T HAVE IT, AND THE LEGAL BASIS FOR PROCESSING THIS INFORMATION
                    </p>
                    <p>
                      <a className={"text-info"} href={"/privacy"}>read more...</a>
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Accept
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
              <li className={style.listInlineItem}>
                <a href="/terms-of-use" className="text" style={{ color: "rgba(250,235,215,0.89)" }}>Terms of Use</a>
              </li>
              <li className={style.listInlineItem}>
                <a href={"/about_us"} className="text" style={{ color: "rgba(250,235,215,0.89)" }}>About Us</a>
              </li>
              <li className={style.listInlineItem}>
                <a href={"/contacts"} className="text" style={{ color: "rgba(250,235,215,0.89)" }}>Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-end">
            <a className="link"
               href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5226224/charity-overview?fbclid=IwAR1ttY_hAVWcnGXaZHIRr0zbdSb9dtBAGMh6j28lik7RayjiC68g_eMgA9k"
               target="_blank">
              <img src={cc_cert} alt="CC Certificate" className={`${style.footerImg} w-75 `} />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <ul className="list-inline mb-3">
              <li className="list-inline-item p-1">
                <FontAwesomeIcon href="mailto:leo@ukropsmedical.org" icon={faEnvelope} size="xl"
                                 style={{ color: "burlywood" }} />
              </li>
              <li className="list-inline-item p-1">
                <FontAwesomeIcon href="https://www.instagram.com/krivski?igsh=a3F6cTEzYm0yYTl5&utm_source=qr"
                                       target="_blank"
                                       icon={faSquareInstagram} size="xl" style={{ color: "burlywood" }} />
              </li>
              <li className="list-inline-item p-1">
                <FontAwesomeIcon href="https://www.facebook.com/profile.php?id=100009578859571" target="_blank"
                                       icon={faFacebook} size="xl" style={{ color: "burlywood" }} />
              </li>
              <li className="list-inline-item p-1">
                <FontAwesomeIcon
                        href="https://www.linkedin.com/in/leo-krivski-3b1a47239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank" icon={faLinkedin} size="xl" style={{ color: "burlywood" }} />
              </li>
            </ul>
            <p className="mb-0">© {new Date().getFullYear()} UKROPS. All rights reserved.</p>
            <p className="mb-0"> UKROPS Medical Charity Registered Charity in England and Wales (charity no. 1205865).</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
