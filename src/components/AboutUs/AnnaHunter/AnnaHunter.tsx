/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import main_logo from "../../../assets/logo/img_ukrops.jpg"
import anna from "../../../assets/founderImage/img_anna.jpeg"
import styles from "../about_us.module.css"
import { useNavigate } from "react-router-dom"
import { Row } from "react-bootstrap"

const AnnaHunter = () => {
  const navigate = useNavigate()
  return (
    <>
      <section>
          <img className={`${styles.img} mx-auto col-sm-10 col-md-6 col-xxl-4`} src={anna} alt="Dr_Anna_Hunter" />
          <h3 className="text-center mt-md-2 mt-lg-4">Dr. Anna Hunter</h3>

        <div id="container2" className="container p-3 my-5 border border-secondary shadow" data-bs-spy="scroll"
             data-bs-target=".navbar" data-bs-offset="10">
          <p className={`${styles.article} mx-lg-4`}>
            Anna Hunter qualified from Crimean State Medical University and practiced as an
            anaesthetist in Ukraine and in the UK.
          </p>
          <p className={`${styles.article} mx-lg-4`}>
            Dr. Anna Hunter,<br />
            Currently she holds a Consultant Anaesthetist post in
            Queen Elizabeth University Hospital in Glasgow, sub-specialising in Obstetrics Anaesthesia
            and Anaesthesia for the ENT surgery, as well as delivering anaesthetic care for multiple
            other surgical specialties, including Trauma and Orthopaedics, General and Vascular Surgery.
            She has non-clinical interest in Medical Law, Complaints Management and Administrative
            justice and teaching student-selected Medical Law course at the University of Glasgow. Dr
            Hunter is also regular faculty at the Advanced Life Support (ALS) and IMPACT courses.
          </p>
          <p className={`${styles.article} mx-lg-4`}>
            Dr. Anna Hunter,<br />
            As a Ukrainian, Dr Hunter always desired to share the skills and expertise gained in the UK
            training to her Ukrainian counterparts, especially in the field of Obstetric Anaesthesia and
            Maternity Critical Care. She is delighted to become a trustee of the UKROPS Charity to help
            the charity to achieve its set goals and objectives, and especially the training of the
            Ukrainian doctors and nurses, among other important goals.
          </p>
        </div>
        <button className={styles.btn} id={"donate_btn"}>Donate</button>
        <img className={`${styles.imgLogo} mx-auto`} src={main_logo} alt="main_logo" width="50%" />
        <Row>
          <button className={`${styles.button} `} id={styles.back_btn}
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
          <button className={`${styles.button} `} id={styles.back_btn}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    })
                    navigate("/justas")
                  }}
          >Justas Mazunaitis
          </button>
          <button className={`${styles.button} `} id={styles.back_btn}
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

export default AnnaHunter
