/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import "../../App.css"
import style from "./home.module.css"
import { imgGallery } from "../../utils/constants"

const Home = () => {

  return (
    <main className={style.main}>
      <section>
        <div>
          <button className={style.btn}>Donate</button>
        </div>
        <div className={`${style.container1} mb-5`}>
          <p className={`${style.text1} mx-2`}>
            The UKROPS Medical Charity was formed by a group of UK doctors to provide a direct aid to
            Ukrainian medics. It was a logical progression of the work that was already being done by its founder <a
            className={style.link1} href={"/leo"} title="About us">Dr Leonid Krivskiy</a> who had started raising money
            to
            help his
            <a className={style.link1} href="https://www.justgiving.com/crowdfunding/leonid-krivskiy" target="_blank"
               title="Crowdfunding to Ukrainian doctors, and frontline medics. on JustGiving"> Ukrainian
              colleagues </a> since the beginning of Russian invasion.<br />


            He has been sourcing and delivering tactical medical and hospital disposables into
            <a className={style.link1} href="https://ukrivski.com/category/my-trips-to-ukraine/" target="_blank"
               title="Leo Krivski - My trips to Ukraine"> Ukraine </a> as well as worked alongside his Ukrainian
            colleagues in a tertiary hospital in
            <a className={style.link1} href="https://ukrivski.com/a-trip-to-kyiv/" target="_blank"
               title="A trip to Kyiv – Leo Krivski"> Kyiv. </a>
          </p>
        </div>

      </section>

      <div className={`${style.row}`}>
        <div className={style.column}>
          <img src={`${imgGallery[0]}`} style={{ width: "100%" }}  alt={"0"} />
          <img src={`${imgGallery[1]}`} style={{ width: "100%" }}  alt={"1"} />
          <img src={`${imgGallery[2]}`} style={{ width: "100%" }} alt={"2"} />
          <img src={`${imgGallery[3]}`} style={{ width: "100%" }}  alt={"3"} />
          <img src={`${imgGallery[5]}`} style={{ width: "100%" }}  alt={"5"} />

        </div>
        <div className={style.column}>
          <img src={`${imgGallery[8]}`} style={{ width: "100%" }}  alt={"8"} />
          <img src={`${imgGallery[9]}`} style={{ width: "100%" }}  alt={"9"} />
          <img src={`${imgGallery[10]}`} style={{ width: "100%" }}  alt={"10"} />
          <img src={`${imgGallery[22]}`} style={{ width: "100%" }}  alt={"22"} />
          <img src={`${imgGallery[6]}`} style={{ width: "100%" }}  alt={"6"} />
          <img src={`${imgGallery[18]}`} style={{ width: "100%" }}  alt={"18"} />

        </div>
        <div className={style.column}>
          <img src={`${imgGallery[13]} `} style={{ width: "100%" }}  alt={"13"} />
          <img src={`${imgGallery[14]}`} style={{ width: "100%" }}  alt={"14"} />
          <img src={`${imgGallery[15]}`} style={{ width: "100%" }}  alt={"15"} />
          <img src={`${imgGallery[16]}`} style={{ width: "100%" }}  alt={"16"} />
          <img src={`${imgGallery[17]}`} style={{ width: "100%" }}  alt={"17"} />
          <img src={`${imgGallery[4]}`} style={{ width: "100%" }}  alt={"4"} />

        </div>
        <div className={style.column}>
          <img src={`${imgGallery[20]}`} style={{ width: "100%" }}  alt={"20"} />
          <img src={`${imgGallery[21]}`} style={{ width: "100%" }}  alt={"21"} />
          <img src={`${imgGallery[23]}`} style={{ width: "100%" }}  alt={"23"} />
          <img src={`${imgGallery[12]}`} style={{ width: "100%" }}  alt={"12"} />
          <img src={`${imgGallery[19]}`} style={{ width: "100%" }}  alt={"19"} />
          <a className="link"
             href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5226224/charity-overview?fbclid=IwAR1ttY_hAVWcnGXaZHIRr0zbdSb9dtBAGMh6j28lik7RayjiC68g_eMgA9k"
             target="_blank">
            <img src={`${imgGallery[11]}`} style={{ width: "100%" }} alt={"11"} />
          </a>

        </div>
      </div>

      <article>
        <div className={`${style.container3} mt-5 mb-3`}>
          <p className={`${style.text2} mt-3 mx-2 mx-lg-4`}>
            During that time, strong relationships with Ukrainian medical colleagues have been formed as
            well as a deep understanding of
            their needs, as well as a realization of the importance of a targeted personalised humanitarian
            aid rather than a bulk delivery
            of things that are either not needed, or not compatible with the equipment and expertise in
            hospitals it gets delivered to.
            What is even more important is the personal relationship, the connection between medical
            professionals, a face of a colleague
            who cares on the other end of the line that helps Ukrainian medics deal with the daily
            never-ending grind of having to deal
            with life-changing injuries of people who are the same age or even younger than themselves.
            Sometimes, a word from a colleague
            who is thousand miles away, but cares deeply about their plight is just as valuable as a medical
            kit that we could source
            for them.<br /><br />

            Leo has partnered with his UK anaesthetic colleagues to form Ukrops Medical Charity to be able
            to take his previous
            humanitarian work in Ukraine to another level building upon the foundation that has already been
            established. Based on the
            funds that we will be able to raise we will be getting involved in the projects that will have a
            long-lasting and meaningful
            impact on the professional lives of our Ukrainian colleagues. We will continue to get involved
            in education and training
            programmes including bringing the colleagues over to the UK for Clinical Attachments, organising
            online and in-person lectures,
            seminars, and master classes.<br /><br />

            Since recently, we have also partnered with
            <a className={style.link2} href="https://www.medicallifelines.org.uk/" target="_blank"
               title="Medical Life Lines"> Medical Life Lines UK </a> who have been sourcing and delivering
            ambulances to Ukraine.
            <a className={style.link2} href="https://ukrivski.com/a-new-partnership/" target="_blank"
               title="A new partnership and the Charity update. – Leo Krivski"> With their help</a>, we have
            made a few successful deliveries of tactical medical kit and hospital disposables to hospitals
            and stabilisation facilities across Ukraine. We are planning to strengthen our partnership in
            the future.<br /><br />

            Dr Krivskiy is also taking on an unsupported solo transatlantic rowing challenge in January,
            2025 to raise money for his charity. <br /><br />

            Please help us help our Ukrainian colleagues heal the wounds of this terrible war.<br />
          </p>

        </div>
      </article>
      <div className="col-lg-1 justify-content-center py-5">
        <button className={`${style.btn} btn-lg  mt-5 justify-content-center`} id={"donate_btn"}>Donate</button>
      </div>
    </main>


  )
}

export default Home

