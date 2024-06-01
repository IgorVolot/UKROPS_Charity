/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/
import React from "react"
import main_logo from "../../assets/logo/img_ukrops.jpg"
import style from "./contacts.module.css"
import { Link } from "react-router-dom"
import letterIcon from "../../assets/logo/letter-icon.svg"

const Contacts = () => {
  return (
    <>
      <section className="container">
        <div>
          <Link to="mailto:leo@ukropsmedical.org">
              <img className={style.mailIcon} src={letterIcon} alt="mail_icon" />
          </Link>
        </div>
        <div className={style.email}>
          <Link to="mailto:leo@ukropsmedical.org">UKROPS Medical Charity</Link>
        </div>
        <div>
          <img className={style.img} src={main_logo} alt="main_logo" />
        </div>

        <div>
          <button className={style.btn}>Donate</button>
        </div>
      </section>
    </>
  )
}

export default Contacts


