/*
 * /
 *  *  *
 *  *  *   ************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *  *   ************************************************************************
 *  *  *
 * /
 */


import React from "react"
import style from "./cookie.module.css"
import { Accordion } from "react-bootstrap"

const CookiePolicy = () => {
  return (
    <React.Fragment>
      <div className={`${style.block}`}>
        <h1 className={"m-md-5"}>Cookie Policy</h1>

        <div className={`${style.text}`}>
          Last updated: 17 May 2024 11:14
        </div>

        <div className={`${style.text}`}>
          We value your privacy very highly. Please read this Cookie Policy carefully before using the
          www.ukropsmedical.org
          Website (the "Website") operated by Leo Krivskiy ("us," "we," "our") as this Cookie Policy contains important
          information regarding our use of cookies and other tracking technologies, your privacy and how we may use the
          information that we collect about you. Please also read our Privacy Policy, which provides more information
          about our privacy practices, your choices and your privacy rights.
        </div>
        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          WHAT ARE COOKIES?
        </div>
        <div className={`${style.text}`}>
          A cookie is a small piece of data sent from a Website and stored on your device by your browser.
        </div>
        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          OUR COLLECTION AND CLASSIFICATION OF COOKIES
        </div>
        <div className={`${style.text}`}>
          This Website collects the cookies identified below. We have classified the cookies that we collect by the
          purpose that they serve.
        </div>
        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          ESSENTIAL COOKIES
        </div>
        <div className={`${style.text}`}>
          Essential cookies are cookies that are essential for you to browse this Website and use its features. For
          example, these cookies may be used for maintaining security, authenticating users, and preventing fraudulent
          actions. These cookies are enabled by default, and without them, the Website may not be fully functional. This
          Website collects the following strictly necessary/essential cookies:
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" >
            <Accordion.Header className={`${style.header}`}>USERCENTRICS CONSENT MANAGEMENT PLATFORM</Accordion.Header>
            <Accordion.Body >
              <p>
                <strong>Provider of the cookie</strong>
              </p>

              <p>Usercentrics GmbH</p>
              <p>
                <strong>Provenance</strong>
              </p>

              <p>Third Party</p>
              <p>
                <strong>Purpose</strong>
              </p>
              <ul>
                <li>Compliance with legal obligations;</li>
                <li>Consent storage.</li>
              </ul>
              <p>
                <strong>Duration</strong>
              </p>
              <p>Perpetual</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          FUNCTIONAL COOKIES
        </div>
        <div className={`${style.text}`}>
          Functional cookies are cookies that allow a Website to remember the choices that you have made in the past and
          how you use the Website. For example, these cookies may be used for remembering what language you prefer,
          which pages you clicked on, or what your username and password are so that you can automatically log in to
          your account. These cookies are disabled by default and will be enabled only if you grant your consent to do
          so. If you do provide your consent, this Website will collect the following functional cookies:
        </div>

        <Accordion >
          <Accordion.Item eventKey="0" >
            <Accordion.Header className={style.header}>GOOGLE FONTS</Accordion.Header>
            <Accordion.Body >
              <p>
                <strong>Provider of the cookie</strong>
              </p>
              <p>Google Ireland Limited</p>
              <p>
                <strong>Provenance</strong>
              </p>
              <p>Third Party</p>
              <p>
                <strong>Purpose</strong>
              </p>
              <ul>
                <li>Providing fonts;</li>
                <li>PImprovement of service.</li>
              </ul>
              <p>
                <strong>Duration</strong>
              </p>
              <p>Perpetual</p>
              <p>
                <strong>How to opt out</strong>
              </p>
              <p>Visit the cookie provider's website.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.header}>JQUERY</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Provider of the cookie</strong>
              </p>
              <p>OpenJS Foundation</p>
              <p>
                <strong>Provenance</strong>
              </p>
              <p>Third Party</p>
              <p>
              <strong>Purpose</strong>
              </p>
              <p>Providing content.</p>
              <p>
              <strong>Duration</strong>
              </p>
              <p>Perpetual</p>
              <p>
              <strong>How to opt out</strong>
              </p>
              <p>Visit the cookie provider's website.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className={style.header}>GOOGLE TAG MANAGER</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Provider of the cookie</strong>
              </p>
              <p>Google Ireland Limited</p>
              <p>
              <strong>Provenance</strong>
              </p>
              <p>Third Party</p>
              <p>
              <strong>Purpose</strong>
              </p>
              <p>Tag Management.</p>
              <p>
              <strong>Duration</strong>
              </p>
              <p>Perpetual</p>
              <p>
                <strong>How to opt out</strong>
              </p>
              <p>Visit the cookie provider's website.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className={style.header}>YOUTUBE VIDEO</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Provider of the cookie</strong>
              </p>
              <p>Google Ireland Limited</p>
              <p>
                <strong>Provenance</strong>
              </p>
              <p>Third Party</p>
              <p>
                <strong>Purpose</strong>
              </p>
              <p>Displaying Videos.</p>
              <p>
                <strong>Duration</strong>
              </p>
              <p>8 months, 4 hours</p>
              <p>
                <strong>How to opt out</strong>
              </p>
              <p>https://safety.google/privacy/privacy-controls/</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          MARKETING COOKIES
        </div>
        <div className={`${style.text}`}>
          Marketing cookies are cookies that track your online activity to, for example, help advertisers deliver more
          relevant advertisements or to limit how many times you see an advertisement. These cookies are disabled by
          default and will be enabled only if you grant your consent to do so. If you do provide your consent, this
          Website will collect the following marketing cookies:
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className={style.header}>GOOGLE ANALYTICS</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Provider of the cookie</strong>
              </p>
              <p>Google Ireland Limited</p>
              <p>
              <strong>Provenance</strong>
              </p>
              <p>Third Party</p>
              <p>
                <strong>Purpose</strong>
              </p>
              <ul>
                <li>Marketing;</li>
                <li>Analytics.</li>
              </ul>
              <p>
                <strong>Duration</strong>
              </p>
              <p>2 years, 12 hours</p>
              <p>
              <strong>How to opt out</strong>
              </p>
              <p>https://tools.google.com/dlpage/gaoptout?hl=de</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          YOUR CHOICES REGARDING COOKIES
        </div>
        <div className={`${style.text}`}>
          You have certain choices when it comes to the placing of cookies on your device. You may choose to accept or
          deny any functional or marketing cookies. If you consent to the use of these cookies but would then like to
          withdraw your consent, you may do so at any time through our cookie consent tool, which can be found on the
          Website's home page. You can control your cookie choices using the following means:
        </div>
        <div className={`${style.text}`}>
          <ul>
            <li>
              Through our cookie consent tool, where you can select the categories of cookies that you allow to be
              placed on your device and withdraw that consent; and
            </li>
            <li>
              Through your browser, where you can instruct it to delete or refuse cookies. You can visit the help center
              of your browser, the "Tools", "Edit", or "Help" pages to set your cookie preferences and delete cookies.
              We also encourage you to visit aboutcookies.org to learn more about how to opt out of cookies.
            </li>
          </ul>
        </div>
        <div className={`${style.text}`} style={{ fontWeight: "600" }}>
          QUESTIONS
        </div>
        <div className={`${style.text}`}>
          If you have any questions about this Cookie Policy, please contact us at leo@ukropsmedical.com.
        </div>
      </div>
    </React.Fragment>
  )
}

export default CookiePolicy
