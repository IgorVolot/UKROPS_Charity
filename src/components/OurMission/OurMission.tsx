/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import big_logo from "../../assets/logo/img_ukrops.jpg"
import style from "./our-mission.module.css"


const OurMission = () => {
  return (
    <>
      <img className={`${style.img} img-thumbnail`} src={big_logo} alt="big_logo"/>

      <div className={`${style.container} my-5 border border-secondary shadow ju`} data-bs-spy="scroll"
           data-bs-target=".navbar" data-bs-offset="10">
        <p className={style.text}>
          As a small newly registered charity we are aiming to continue building up on the work started by
          our founder Leo Krivskiy. We continue to gratefully receive used medical equipment and
          disposables from UK hospitals and medical companies, which is then delivered into Ukraine by our
          partners at the Medical Lifelines UK and sent directly to our contacts who need them most. There
          are no middlemen, or big charities involved – we know the people we help personally and respond
          to their requests directly.
        </p>

        <div>
          <button className={style.btn}>Donate</button>
        </div>

        <p className={style.text}>
          At Ukrops, we are all doctors who not only have a deep understanding
          of the needs of the Ukrainian medics but are also able to communicate to them in their language
          and appreciate and respond to the real situation on the ground.<br />

          Having established relationships with numerous Ukrainian doctors, and particularly the ones in
          leadership positions we are able to offer tailor-made aid packages that would have real and
          long-lasting impact on the working lives of medics and their patients. We have a few potential
          projects that we wanted to work on, but it all depends on the success of our fundraising
          campaigns. At the moment, our main campaign is Leo’s Row – a solo transatlantic rowing challenge
          that Dr Krivskiy is planning to embark upon in January 2025.<br /><br />

          We are also involved in various educational and training projects both in Ukraine and over here
          in the United Kingdom. We have already managed to bring a few Ukrainian doctors over here for
          short clinical attachments, but the reality is that most of them are not able to afford the
          costs involved. There is a great interest in both the Ukrainian, and the UK’s medical
          communities to learn from each other’s experiences and it would be great to be able to help them
          learn more about the Western healthcare model while sharing their experiences of treatment of
          major trauma with limited resources in an unsafe environment.<br />

          Ultimately, we would like to be supporting and facilitating the reconstruction of existing (and
          the development of new) hospitals and other medical and healthcare facilities and infrastructure
          in Ukraine when the war is finally over.
          We are starting small, but we are aiming big!<br />
        </p>
      </div>
      <div>
        <button className={ style.btn } id={style.btn}>Donate</button>
      </div>
    </>
  )
}

export default OurMission

