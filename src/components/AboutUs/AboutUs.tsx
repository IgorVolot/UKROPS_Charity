/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import leo from "../../assets/founderImage/img_leo-min.jpeg"
import anna from "../../assets/founderImage/img_anna-min.jpeg"
import justas from "../../assets/founderImage/img_justas-min.jpeg"
import { Col, Row } from "react-bootstrap"
import about_us from "./about_us.module.css"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <>
        <Row className={about_us.row}>
        <Col lg={4} className={`{${about_us.column} ${about_us.clearfix} `}>
          <div className={`${about_us.card}`} >
            <p>
              <img className={`${about_us.img} w-50 m-3`} src={leo} alt="Leo" />
            </p>

            <div className={`${about_us.container} ms-3`} >
              <h2>Dr. Leo Krivskiy</h2>
              <p className={`${about_us.title} ms-5`}>Founder</p>
              <p className={`${about_us.text} mx-3`}>I would like to set up realistic, but impactful goals, which would make a
                real difference to the lives of the people that I know, respect and trust.
                <p className={`${about_us.signature} mt-3 ms-5`}>Dr. Leonid Krivskiy</p>
              </p>
              <p className="mx-auto">
                <button className={about_us.button}><Link to="/leo">Learn more</Link></button>
              </p>
            </div>
          </div>
        </Col>

        <Col lg={4} className={`{${about_us.column} ${about_us.clearfix} `}>
          <div className={about_us.card} >
            <p>
              <img className={`${about_us.img} w-50 m-3`} src={anna} alt="Anna" />
            </p>

            <div className={`${about_us.container} ms-3`}>
              <h2>Dr. Anna Hunter</h2>
              <p className={`${about_us.title} ms-5`}>Co-founder</p>
              <p className={`${about_us.text} mx-3`}>As a Ukrainian, Dr Hunter always desired to share the skills and expertise gained in the UK
                training to her Ukrainian counterparts, especially in the field of Obstetric Anaesthesia and
                Maternity Critical Care.
                <p className={`${about_us.signature} mt-3 ms-5`}>Hunter Anna</p>
              </p>
              <p className="mx-auto">
                <button className={about_us.button}><Link to="/anna">Learn more</Link></button>
              </p>
            </div>
          </div>
          <div>
            <button className={`${about_us.btn} btn-lg`}>Donate</button>
          </div>
        </Col>

        <Col lg={4} className={`{${about_us.column} ${about_us.clearfix} `}>
          <div className={about_us.card} >
            <p>
              <img className={`${about_us.img} w-50 mx-3 mt-0`} src={justas} alt="Justas" />
            </p>
            <div className={`${about_us.container} ms-3`}>
              <h2>Dr. Justas Mazunaitis</h2>
              <p className={`${about_us.title} ms-5`}>Co-founder</p>
              <p className={`${about_us.text} mx-3`}>Justas Mazunaitis has trained and worked as an anaesthetist in Lithuania and arrived to the UK
                in 2014, coincidentally - the time when annexation of Crimea was happening.
                <p className={`${about_us.signature} mt-3 ms-5`}>Dr. Justas Mazunaitis</p>
              </p>
              <p className="mx-auto">
                <button className={about_us.button}><Link to="/justas">Learn more</Link></button>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AboutUs



