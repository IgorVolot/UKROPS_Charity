/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import React from "react"
import main_logo from "../../../assets/logo/img_ukrops.jpg"
import anna from "../../../assets/founderImage/img_anna.jpeg"
import about_us from "../about_us.module.css"
import {useNavigate} from "react-router-dom"
import { Row } from "react-bootstrap"

const AnnaHunter = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className={about_us.card}>
            <img className={`${about_us.img} img-thumbnail mx-auto`} src={anna} alt="Anna_Hunter" />

          <div className="card-body card-body justify-content-center align-items-center">
            <h3 className="card-text text-center">Dr. Anna Hunter</h3>
          </div>
        </div>
        <div id="container2" className="container p-3 my-5 border border-secondary shadow" data-bs-spy="scroll"
             data-bs-target=".navbar" data-bs-offset="10">
          <p className={`${about_us.text} mx-lg-4`}>
            Anna Hunter qualified from Crimean State Medical University and practiced as an
            anaesthetist in Ukraine and in the UK.
          </p><br /><br />
          <p className={`${about_us.text} mx-lg-4`}>
            Dr. Anna Hunter,<br />
            Currently she holds a Consultant Anaesthetist post in
            Queen Elizabeth University Hospital in Glasgow, sub-specialising in Obstetrics Anaesthesia
            and Anaesthesia for the ENT surgery, as well as delivering anaesthetic care for multiple
            other surgical specialties, including Trauma and Orthopaedics, General and Vascular Surgery.
            She has non-clinical interest in Medical Law, Complaints Management and Administrative
            justice and teaching student-selected Medical Law course at the University of Glasgow. Dr
            Hunter is also regular faculty at the Advanced Life Support (ALS) and IMPACT courses.<br /><br />

            Dr. Anna Hunter,<br />
            As a Ukrainian, Dr Hunter always desired to share the skills and expertise gained in the UK
            training to her Ukrainian counterparts, especially in the field of Obstetric Anaesthesia and
            Maternity Critical Care. She is delighted to become a trustee of the UKROPS Charity to help
            the charity to achieve its set goals and objectives, and especially the training of the
            Ukrainian doctors and nurses, among other important goals.<br /><br />
          </p>
        </div>
        <button className={about_us.btn} id={"donate_btn"}>Donate</button>
        <img src={main_logo} alt="main_logo" width="50%" />
        <Row>
          <button className={`${about_us.button} col mx-2`} id={about_us.back_btn}
                  style={{ width: '16em', height: '3em' }}
                  onClick={() => navigate("/leo")}>Leo Krivskiy
          </button>
          <button className={`${about_us.button} col mx-2`} id={about_us.back_btn}
                  style={{ width: '6em', height: '3em' }}
                  onClick={() => navigate("/about_us")}>About Us
          </button>
          <button className={`${about_us.button} col mx-2`} id={about_us.back_btn}
                  style={{ width: '16em', height: '3em' }}
                  onClick={() => navigate("/justas")}>Justas Mazunaitis
          </button>
        </Row>
      </section>

    </>
  )
}

export default AnnaHunter
