/*
 * /
 *  *  *
 *  *  *   ************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *  *   ************************************************************************
 *  *  *
 * /
 */


import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import leo from "../../assets/founderImage/img_leo.jpeg"
import anna from "../../assets/founderImage/img_anna.jpeg"
import justas from "../../assets/founderImage/img_justas.jpeg"
import styles from "./about_us.module.css"
import { useNavigate } from "react-router-dom"
import { FOUNDER_TEXT } from "../../utils/constants"

const AboutUs = () => {
  const navigate = useNavigate()
  const MAX_STRING_LENGTH = 146
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row md={1} className="g-4 pt-lg-4">
          <Card className={`${styles.card} mx-3 `} border="secondary" style={{ width: "20rem", borderRadius: "0" }}>
            <Card.Img variant="top" src={leo} alt="Leo" style={{ width: "300px", height: "auto", padding: "20px" }} />
            <Card.Body>
              <Card.Title>Dr. Leo Krivskiy</Card.Title>
              <Card.Text>
                <p className={`${styles.title} ms-5`}>Founder</p>
                <p className={`${styles.text} mx-3`}>

                  {(FOUNDER_TEXT[0] && FOUNDER_TEXT[0].length > MAX_STRING_LENGTH
                    ? `${FOUNDER_TEXT[0].substring(0, MAX_STRING_LENGTH + 1)}...`
                    : FOUNDER_TEXT[0]) || ""}
                </p>
                <p
                  className={`${styles.signature} mt-3 ms-1`}
                  id={styles.leoSignature}
                >
                  Leo Krivskiy
                </p>
              </Card.Text>
              <Button className={`${styles.button} `}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth"
                        })
                        navigate("/leo")
                      }}
              >Learn more
              </Button>
            </Card.Body>
          </Card>

          <Card className={`${styles.card} mx-3`} border="secondary" style={{ width: "20rem", borderRadius: "0" }}>
            <Card.Img variant="top" src={anna} alt="Anna" style={{ width: "300px", height: "auto", padding: "20px" }} />
            <Card.Body>
              <Card.Title>Dr. Anna Hunter</Card.Title>
              <Card.Text>
                <p className={`${styles.title} ms-5`}>Co-founder</p>
                <p className={`${styles.text} mx-3`}>
                  {(FOUNDER_TEXT[1] && FOUNDER_TEXT[1].length > MAX_STRING_LENGTH
                    ? `${FOUNDER_TEXT[1].substring(0, MAX_STRING_LENGTH + 1)}...`
                    : FOUNDER_TEXT[1]) || ""}
                </p>
                <p
                  className={`${styles.signature} mt-3 ms-1`}
                  id={styles.annaSignature}
                >
                  Anna Hunter
                </p>
              </Card.Text>
              <Button className={`${styles.button} `}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth"
                        })
                        navigate("/anna")
                      }}
              >Learn more
              </Button>
            </Card.Body>
          </Card>

          <Card className={`${styles.card} mx-3 `} border="secondary" style={{ width: "20rem", borderRadius: "0" }}>
            <Card.Img variant="top" src={justas} alt="Justas" style={{ width: "300px", height: "auto", padding: "20px" }} />
            <Card.Body>
              <Card.Title>Dr. Justas Mazunaitis</Card.Title>
              <Card.Text>
                <p className={`${styles.title} ms-5`}>Co-founder</p>
                <p className={`${styles.text} mx-3`}>
                  {(FOUNDER_TEXT[2] && FOUNDER_TEXT[2].length > MAX_STRING_LENGTH
                    ? `${FOUNDER_TEXT[2].substring(0, MAX_STRING_LENGTH + 1)}...`
                    : FOUNDER_TEXT[2]) || ""}
                </p>
                <p
                  id={styles.justasSignature}
                  className={`${styles.signature} mt-3 ms-1`}
                >
                  Mazunaitis Justas
                </p>
              </Card.Text>
              <Button className={`${styles.button} `}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth"
                        })
                        navigate("/justas")
                      }}
              >Learn more
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
      <div className="d-flex justify-content-center">
        <button className={`${styles.btn} `}>Donate</button>
      </div>
    </>
  )
}

export default AboutUs
