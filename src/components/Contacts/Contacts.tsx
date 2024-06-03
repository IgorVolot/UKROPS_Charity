/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import main_logo from "../../assets/logo/img_ukrops.jpg"
import style from "./contacts.module.css"
import letterIcon from "../../assets/logo/letter-icon.svg"

const Contacts = () => {
  return (
    <>
      <div className={`${style.container}`}>
        <div className="d-flex" style={{justifyContent: 'center'}}>
          <a href="mailto:leo@ukropsmedical.org">
              <img className={style.mailIcon} src={letterIcon} alt="mail_icon" />
          </a>
        </div>
        <div className={style.email}>
          <a href="mailto:leo@ukropsmedical.org">UKROPS Medical Charity</a>
        </div>
        <div>
          <img className={style.img} src={main_logo} alt="main_logo" />
        </div>

        <div>
          <button className={style.btn}>Donate</button>
        </div>
      </div>
    </>
  )
}

export default Contacts


