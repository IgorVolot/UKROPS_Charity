/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import React from "react"
import main_logo from "../../../assets/logo/img_ukrops.jpg"
import justas from "../../../assets/founderImage/img_justas.jpeg"
import {useNavigate} from "react-router-dom"
import about_us from "../about_us.module.css"
import { Row } from "react-bootstrap"

const JustasMazunaitis = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className={about_us.card}>
          <img className={`${about_us.img} img-thumbnail mx-auto`} src={justas}
               alt="Justas_Mazunaitis" />
          <div className="card-body">
            <h3 className="card-text text-center">Dr. Justas Mazunaitis</h3>
          </div>
        </div>
        <div id="container3" className="container p-3 my-5 border border-secondary shadow" data-bs-spy="scroll"
             data-bs-target=".navbar" data-bs-offset="10">
          <p className={`${about_us.text} mx-lg-4`}>
            Justas Mazunaitis has trained and worked as an anaesthetist in Lithuania and arrived to the UK
            in 2014, coincidentally - the time when annexation of Crimea was happening.
          </p>
          <p className={`${about_us.text} mx-lg-4`}>
            Dr. Justas Mazunaitis<br />
            completed a fellowship in Trauma Intensive Care and later switched to anaesthetics with
            special interest in trauma and regional anaesthesia at the Royal London Hospital where he worked
            as a consultant.
            .<br /><br />

            He is currently practicing anaesthetics at University Hospital Southampton NHS Foundation Trust
            with main focus to trauma and regional anaesthesia.<br /><br />

            Justas has taken part in Dr. Leonid Krivskiy's efforts gathering and taking essential supplies
            and vehicles to Ukraine in the early days of the war, and as someone coming from the Baltics
            where the historical presence and wrongdoings of the current invader of Ukraine had been felt
            for years, is keen to support the efforts of UKROPS charity.<br />
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
                  style={{ width: '16em', height: '3em' }}
                  onClick={() => navigate("/anna")}>Anna Hunter
          </button>
          <button className={`${about_us.button} col mx-2`} id={about_us.back_btn}
                  style={{ width: '6em', height: '3em' }}
                  onClick={() => navigate("/about_us")}>About Us
          </button>
        </Row>
      </section>
    </>
  )
}

export default JustasMazunaitis
