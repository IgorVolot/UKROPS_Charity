/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import style from "./our_project.module.css"
import media_1 from "../../assets/video/media_file.mp4"
import img1 from "../../assets/pictures/img-aid_0.jpeg"

const OurProjects = () => {

  return (
    <>
      <div className={style.pageHeader}>
        <i className="text-center">What we done and what we're going to do with you help</i>
      </div>

      <div className={style.timeline}>
        <div className={`${style.container} ${style.left} ${style.video}`}>
          <div className={style.content}>

            <h2 className={style.h2}>January 2025</h2>
            <div className={`${style.p} `}>
              <iframe title="Leo-Row-Atlantic" width="420" height="315"
                      src="https://www.youtube.com/embed/wKWVc-5VPFA?autoplay=1&mute=1">
              </iframe>
              <div className="">
                <p className={`${style.text}`}>In January 2025, Leo will embark on the extraordinary challenge of <a
                  href="https://www.leosrow.com/the-challenge" rel="noopener noreferrer" target="_blank">
                  rowing solo</a> across the Atlantic. Starting from Tenerife and finishing in Barbados, this voyage is
                  a true test of both physical strength and mental resilience. Leo will navigate through the vast, open
                  waters, battling against unpredictable weather and towering waves, all while facing the daunting
                  solitude of the ocean.
                </p>

                <p className={`${style.text}`}>The immense task of maintaining physical endurance and mental focus
                  amidst the breath-taking yet relentless expanse of the Atlantic will push Leo to his limits.
                </p>

                <p className={`${style.text}`}>Reaching Barbados won't just signify the end of a geographical voyage; it
                  will mark the completion of an incredible personal achievement, showcasing human determination and
                  spirit at its finest. This remarkable journey also serves as a platform for Leo's commitment to
                  fundraise and support Ukrainian medical professionals, providing them with essential medical equipment
                  and supplies, further underlining the profound impact of this Atlantic row.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.container} ${style.right}`}>
          <div className={style.content}>
            <h2 className={style.h2}>2024</h2>
            <div className={style.p}>
              <iframe title="Leo-Row-Atlantic" width="420" height="315"
                      src="https://www.youtube.com/embed/z1ZCNKs-Ies?autoplay=1&mute=1">
              </iframe>
              <div>
                <p className={`${style.text}`}>
                  I support through my travels through my educational activity. Since 2014 I've been involved with my
                  Ukrainian anesthetic colleagues both by going there organizing seminars and conferences. I know quite
                  a few people in the medical world in Ukraine and I'm able to contact them directly and I really know
                  their needs and respond to them of course.
                </p>
                <p className={`${style.text}`}>
                  Please support us, please follow us and please keep your
                  interest in what's going on Ukraine alive. This is vitally important that we help those people survive
                  and save as many lives as possible. Thank you.
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className={`${style.container} ${style.left}`}>
          <div className={style.content}>
            <h2 className={style.h2}>2023</h2>
            <div className={style.p}>
              <video className="float-start p-sm-0 p-md-1 mx-sm-0 mx-lg-2"
                     style={{ width: "420px", height: "auto" }}
                     autoPlay={true} muted={true}
                     controls={true}>
                <source src={media_1} type="video/mp4" />
              </video>
              <text className={`${style.text} `}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit
                voluptua dignissim per, habeo iusto primis ea eam.
              </text>
            </div>
          </div>
        </div>

        <div className={`${style.container} ${style.right}`}>
          <div className={style.content}>
            <h2 className={style.h2}>2022</h2>
            <div className={style.p}>
              <a href="https://www.justgiving.com/crowdfunding/leonid-krivskiy" target="_blank"
                 rel="noopener noreferrer">
                <img className={`${style.img1} float-start p-md-1 mx-lg-2 `} src={img1} alt="volounteers"
                />
              </a>

              <div className="">
                <p className={`${style.text}`}>I am buying tactical medical disposables, and equipment, and
                  deliver it myself to Ukraine, where it
                  is distributed directly to the people, who currently need it most. I know everyone involved
                  personally,
                  and you could look into their eyes too. Everything is being bought, and prioritized according to their
                  current needs. I am in charge of the whole process, and my name is on it.
                </p>

                <p className={`${style.text}`}>I have already done two deliveries, and am planning another one.</p>

                <p className={`${style.text}`}>Before I had planned my first trip to Ukraine, I just wanted to do
                  something useful on a small scale,
                  and hence my natural choice was tactical medical disposables for the frontline medics. CAT
                  tourniquets,
                  Celox, Israeli bandages - they have been, and are in great demand, and limited supply. I also had a
                  specific request for bulletproof vests from a group of medics, who were operating near Kyiv, a hotspot
                  at the time of my first trip. I did not know the situation on the ground very well then, and just
                  concentrated on the things you can’t go wrong with, as well as also responding to a few specific
                  requests from the people I’d gotten to know previously.</p>

                <p className={`${style.text}`}>Now, after my second mission is completed, I have a much better idea
                  about where I want to go with this,
                  provided I manage to attract more funding.</p>

                <ol className={`${style.text}`}>
                  <li>
                    Tactical medical kit (tourniquets, Celox haemostatic gauze, Israeli bandages, IFAKs) delivered
                    directly to my contacts on the frontlines.
                  </li>
                  <li>
                    I will also help medics with bulletproof vests, and helmets of good quality as needed.
                  </li>
                  <li>
                    Anaesthetic and surgical disposables, and equipment requested by colleagues working in hospitals
                    throughout the country.
                  </li>

                  <li>
                    Teaching, and training of my Ukrainian colleagues:
                    <ul>
                      <li>Online</li>
                      <li>In person during my visits to Ukraine</li>
                      <li>By organising short-term clinical attachments here in the UK.</li>
                    </ul>
                  </li>
                  <li>
                    Nutritional support for frontline troops – delivering freeze-dried meals of high nutritional, and
                    energy values.
                  </li>
                  <li>
                    Supporting re-building efforts – helping with the set-up of a “NATO-standards” military rehab
                    hospital being built in Lviv.
                  </li>
                  <li>
                    Looking into the future – preparation for our transatlantic charity row with Ukrainian
                    veterans.
                  </li>
                </ol>

                <p className={`${style.text}`}>This is a personal project of mine. It has nothing to do with the
                  organisation I work at, or any other
                  roles I play elsewhere. I am doing it as a Citizen, and a human being trying to help other human
                  beings,
                  who are in a desperate need. I have a few Ukrainian friends, who are in a dark place right now, and
                  this
                  is my small-scale contribution to our common cause. They are fighting now so we won't have to in the
                  future!
                </p>

                <p className={`${style.text}`}>I know that many of you have donated through bigger organizations, but if
                  you like to contribute in a
                  more personal way - please do!
                </p>

                <p className={`${style.text}`}>Thanks for supporting our efforts, and thank you for donating!</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.container} ${style.left}`}>
          <div className={style.content}>
            <h2 className={style.h2}>2011</h2>
            <div className={style.p}>
              <text className={`${style.text} `}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit
                voluptua dignissim per, habeo iusto primis ea eam.
              </text>
            </div>
          </div>
        </div>

        <div className={`${style.container} ${style.right}`}>
          <div className={style.content}>
            <h2 className={style.h2}>2007</h2>
            <div className={style.p}>
              <text className={`${style.text} `}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit
                voluptua dignissim per, habeo iusto primis ea eam.
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProjects

