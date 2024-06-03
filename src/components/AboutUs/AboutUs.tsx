/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import leo from "../../assets/founderImage/img_leo.jpeg"
import anna from "../../assets/founderImage/img_anna.jpeg"
import justas from "../../assets/founderImage/img_justas.jpeg"
import { Col, Row } from "react-bootstrap"
import styles from "./about_us.module.css"
import { useNavigate } from "react-router-dom"
import { FOUNDER_TEXT } from "../../utils/constants"

const AboutUs = () => {
  const navigate = useNavigate()
  const MAX_STRING_LENGTH = 146


  return (
    <>
      <Row className={styles.row}>
        <Col lg={4} className={`{${styles.column} ${styles.clearfix} `}>
          <div className={`${styles.card}`}>
            <p>
              <img className={`${styles.img} w-50 m-3`} src={leo} alt="Leo" />
            </p>

            <div className={`${styles.container} ms-3`}>
              <h2>Dr. Leo Krivskiy</h2>
              <p className={`${styles.title} ms-5`}>Founder</p>
              <div className={`${styles.text} mx-3`}>
                {(FOUNDER_TEXT[0] && FOUNDER_TEXT[0].length > MAX_STRING_LENGTH
                  ? `${FOUNDER_TEXT[0].substring(0, MAX_STRING_LENGTH + 1)}...`
                  : FOUNDER_TEXT[0]) || ""}<br /><br />
                <p
                  className={`${styles.signature} mt-3 ms-1`}
                  id={styles.leo_signature}>Leo Krivskiy</p>
              </div>
                <button className={`${styles.button}`}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                          })
                          navigate("/leo")
                        }}
                >Learn more
                </button>

            </div>
          </div>
        </Col>

        <Col lg={4} className={`{${styles.column} ${styles.clearfix} `}>
          <div className={styles.card}>
            <p>
              <img className={`${styles.img} w-50 m-3`} src={anna} alt="Anna" />
            </p>

            <div className={`${styles.container} ms-3`}>
              <h2>Dr. Anna Hunter</h2>
              <p className={`${styles.title} ms-5`}>Co-founder</p>
              <div className={`${styles.text} mx-3`}>
                {(FOUNDER_TEXT[1] && FOUNDER_TEXT[1].length > MAX_STRING_LENGTH
                  ? `${FOUNDER_TEXT[1].substring(0, MAX_STRING_LENGTH + 1)}...`
                  : FOUNDER_TEXT[1]) || ""}
                <p
                  className={`${styles.signature} mt-3 ms-1`}
                  id={styles.anna_signature}
                >Anna Hunter
                </p>
              </div>
              <button className={`${styles.button} `}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth"
                        })
                        navigate("/anna")
                      }}
              >Learn more
              </button>

            </div>
          </div>
          <div>
            <button className={`${styles.btn} `}>Donate</button>
          </div>
        </Col>

        <Col lg={4} className={`{${styles.column} ${styles.clearfix} `}>
          <div className={styles.card}>
            <p>
              <img className={`${styles.img} w-50 m-3`} src={justas} alt="Justas" />
            </p>
            <div className={`${styles.container} ms-3`}>
              <h2>Dr. Justas Mazunaitis</h2>
              <p className={`${styles.title} ms-5`}>Co-founder</p>
              <div className={`${styles.text} mx-3`}>
                {(FOUNDER_TEXT[2] && FOUNDER_TEXT[2].length > MAX_STRING_LENGTH
                  ? `${FOUNDER_TEXT[2].substring(0, MAX_STRING_LENGTH + 1)}...`
                  : FOUNDER_TEXT[2]) || ""}
                <p id={styles.justas_signature} className={`${styles.signature} mt-3 ms-1`}>Mazunaitis Justas</p>
              </div>
              <button className={`${styles.button} `}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth"
                        })
                        navigate("/justas")
                      }}
              >Learn more
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AboutUs



