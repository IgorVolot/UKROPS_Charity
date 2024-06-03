/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import main_logo from "../../../assets/logo/img_ukrops.jpg"
import justas from "../../../assets/founderImage/img_justas.jpeg"
import { useNavigate } from "react-router-dom"
import styles from "../about_us.module.css"
import { Row } from "react-bootstrap"

const JustasMazunaitis = () => {
  const navigate = useNavigate()
  return (
    <>
      <section>

        <img className={`${styles.img} mx-auto col-sm-10 col-md-6 col-xxl-4`} src={justas}
             alt="Dr_Justas_Mazunaitis" />
        <h3 className="text-center mt-md-2 mt-lg-4">Dr. Justas Mazunaitis</h3>
        <div id="container3" className="container p-3 my-5 border border-secondary shadow" data-bs-spy="scroll"
             data-bs-target=".navbar" data-bs-offset="10">
          <p className={`${styles.article} mx-lg-4`}>
            Justas Mazunaitis has trained and worked as an anaesthetist in Lithuania and arrived to the UK
            in 2014, coincidentally - the time when annexation of Crimea was happening.
          </p>
          <p className={`${styles.article} mx-lg-4`}>
            Dr. Justas Mazunaitis<br />
            completed a fellowship in Trauma Intensive Care and later switched to anaesthetics with
            special interest in trauma and regional anaesthesia at the Royal London Hospital where he worked
            as a consultant.
          </p>
          .<p className={`${styles.article} mx-lg-4`}>
          He is currently practicing anaesthetics at University Hospital Southampton NHS Foundation Trust
          with main focus to trauma and regional anaesthesia.
        </p>
          <p className={`${styles.article} mx-lg-4`}>
            Justas has taken part in Dr. Leonid Krivskiy's efforts gathering and taking essential supplies
            and vehicles to Ukraine in the early days of the war, and as someone coming from the Baltics
            where the historical presence and wrongdoings of the current invader of Ukraine had been felt
            for years, is keen to support the efforts of UKROPS charity.
          </p>
        </div>
        <button className={styles.btn} id={"donate_btn"}>Donate</button>
        <img src={main_logo} alt="main_logo" width="50%" />
        <Row>
          <button className={`${styles.button} col mx-2`} id={styles.back_btn}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/leo")
                  }}
          >Leo Krivskiy
          </button>
          <button className={`${styles.button} col mx-2`} id={styles.back_btn}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/anna")
                  }}
          >Anna Hunter
          </button>
          <button className={`${styles.button} col mx-2`} id={styles.back_btn}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/about_us")
                  }}
          >About Us
          </button>
        </Row>
      </section>
    </>
  )
}

export default JustasMazunaitis
