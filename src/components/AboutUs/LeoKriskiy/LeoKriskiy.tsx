/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import main_logo from "../../../assets/logo/img_ukrops.jpg"
import styles from "../about_us.module.css"
import { useNavigate } from "react-router-dom"
import { Row } from "react-bootstrap"

import ImgCarousel from "./ImgCarousel"

const LeoKrivskiy = () => {
  const navigate = useNavigate()

  return (
    <>
      <ImgCarousel />

      <div className="container p-3 my-5 border border-secondary shadow " data-bs-spy="scroll"
           data-bs-target=".navbar" data-bs-offset="10">
        <p className={`${styles.article} mx-lg-4`}>
          As a small charity, I would like to set up realistic, but impactful goals, which would make
          a
          real difference to the lives of the people that I know, respect and trust. Hence, I have
          made a
          decision to concentrate on helping doctors who are also in leadership positions within their
          hospitals and will be able to make real positive changes.
        </p>
        <p className={`${styles.article} mx-lg-4`}>
          Dr. Leonid Krivskiy,<br />
          the driving force behind UKROPS qualified from a Moscow University and went on to train and
          work as an Anaesthetist in Russia and the UK. He has been a Consultant Anaesthetist at the
          University Hospital Southampton since 2009. He specialises in Major Surgery including
          Vascular, Thoracic and liver surgery, but is a self-confessed “Jack-of-all-trades” who
          tries to maintain an expertise in a wide range of surgical specialities.
        </p>
        <p className={`${styles.article} mx-lg-4`}>
          He has been engaged in training of his Ukrainian colleagues for a long time, primarily through online
          educational platforms, but also organising lectures and workshops in Ukraine since the annexation of Crimea
          and the start of the war in the Eastern Ukraine in 2014. Since the Russian invasion in February, 2022 he has
          raised a significant amount of money through his JustGiving page, which he has used to buy tactical medical
          kit and delivered it personally to Ukraine. He has also continued with his educational projects including
          setting up a joint online platform with his Intensive Care colleagues from the World-famous Mayo Clinic in the
          U.S. called <a className={styles.link} href="https://www.icertain.org/ukraine" rel="noopener noreferrer"
                         target="_blank" title="CERTAIN Ukraine"> CERTAIN Ukraine </a> which is aimed at
          providing Ukrainian anaesthetists with the latest scientific evidence, as well as answering practical clinical
          questions. Dr Krivskiy also provides practical advice to his colleagues throughout Ukraine including those
          working at frontline hospitals and stabilisation facilities.
        </p>
        <p className={`${styles.article} mx-lg-4`}>
          He also visited a Kyiv hospital in March, 2023 where he worked and shared his experience
          with
          his anaesthetic colleagues and friends. Dr. Krivskiy has been writing about his experiences
          in Ukraine on his blog <a className={styles.link} href="https://ukrivski.com/" rel="noopener noreferrer"
                                    target="_blank"
                                    title="Leo Krivski – Real People. Real Stories. Real Solutions">
          Leo Krivski – Real People. Real Stories. Real Solutions. </a> He has also been recording
          stories of Ukrainian doctors there to let the World see the war through the eyes of ordinary
          Ukrainians whose lives have been turned upside down, and what choices they have had to made
          to survive and remain true to themselves. It has become a project that Leonid considers to
          be just as important as any other aspect of his work in Ukraine.
        </p>
        <p className={`${styles.article} mx-lg-4`}>
          Dr. Krivskiy is currently preparing to row across the Atlantic Ocean solo and unassisted in
          support of his Ukrainian medical colleagues. Hopefully, he will be able to raise enough
          money for a bigger project, which would have a long-term impact on the lives of his amazing
          friends and contribute to the post-war recovery of their country.
        </p>
      </div>
      <button className={styles.btn} id={"donate_btn"}>Donate</button>
      <img className={`${styles.logo} center`} src={main_logo} alt="main_logo" />


      <Row className={`${styles.buttonRow} justify-content-center align-items-center`}>
        <button className={`${styles.button} mx-2`} id={styles.back_btn}
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
        <button className={`${styles.button} mx-2`} id={styles.back_btn}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                  })
                  navigate("/justas")
                }}>Justas Mazunaitis
        </button>
        <button className={`${styles.button} mx-2`} id={styles.back_btn}
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
    </>
  )
}

export default LeoKrivskiy
