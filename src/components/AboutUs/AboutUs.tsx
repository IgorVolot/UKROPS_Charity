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
import { Link } from "react-router-dom"
import {FOUNDER_TEXT} from "../../utils/constants"

const AboutUs = () => {

  const MAX_STRING_LENGTH = 115

  return (
    <>
        <Row className={styles.row}>
        <Col lg={4} className={`{${styles.column} ${styles.clearfix} `}>
          <div className={`${styles.card}`} >
            <p>
              <img className={`${styles.img} w-50 m-3`} src={leo} alt="Leo" />
            </p>

            <div className={`${styles.container} ms-3`} >
              <h2>Dr. Leo Krivskiy</h2>
              <p className={`${styles.title} ms-5`}>Founder</p>
              <p className={`${styles.text} mx-3`}>

                {(FOUNDER_TEXT[0] && FOUNDER_TEXT[0].length > MAX_STRING_LENGTH
                  ? `${FOUNDER_TEXT[0].substring(0, MAX_STRING_LENGTH + 1)}...`
                  : FOUNDER_TEXT[0]) || ""}

                <p className={`${styles.signature} mt-3 ms-1`}>Leo Krivskiy</p>
              </p>
              <p className="mx-auto">
                <button className={styles.button}><Link to="/leo">Learn more</Link></button>
              </p>
            </div>
          </div>
        </Col>

        <Col lg={4} className={`{${styles.column} ${styles.clearfix} `}>
          <div className={styles.card} >
            <p>
              <img className={`${styles.img} w-50 m-3`} src={anna} alt="Anna" />
            </p>

            <div className={`${styles.container} ms-3`}>
              <h2>Dr. Anna Hunter</h2>
              <p className={`${styles.title} ms-5`}>Co-founder</p>
              <p className={`${styles.text} mx-3`}>
                {(FOUNDER_TEXT[1] && FOUNDER_TEXT[1].length > MAX_STRING_LENGTH
                  ? `${FOUNDER_TEXT[1].substring(0, MAX_STRING_LENGTH + 1)}...`
                  : FOUNDER_TEXT[1]) || ""}
                <p className={`${styles.signature} mt-3 ms-1`}>Anna Hunter</p>
              </p>
              <p className="mx-auto">
                <button className={styles.button}><Link to="/anna">Learn more</Link></button>
              </p>
            </div>
          </div>
          <div>
            <button className={`${styles.btn} `}>Donate</button>
          </div>
        </Col>

        <Col lg={4} className={`{${styles.column} ${styles.clearfix} `}>
          <div className={styles.card} >
            <p>
              <img className={`${styles.img} w-50 m-3`} src={justas} alt="Justas" />
            </p>
            <div className={`${styles.container} ms-3`}>
              <h2>Dr. Justas Mazunaitis</h2>
              <p className={`${styles.title} ms-5`}>Co-founder</p>
              <p className={`${styles.text} mx-3`}>
                {(FOUNDER_TEXT[2] && FOUNDER_TEXT[2].length > MAX_STRING_LENGTH
                  ? `${FOUNDER_TEXT[2].substring(0, MAX_STRING_LENGTH + 1)}...`
                  : FOUNDER_TEXT[2]) || ""}
                <p id={styles.justasSignature} className={`${styles.signature} mt-3 ms-1`}>Mazunaitis Justas</p>
              </p>
              <p className="mx-auto">
                <button className={styles.button}><Link to="/justas">Learn more</Link></button>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AboutUs



