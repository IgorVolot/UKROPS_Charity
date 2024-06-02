/*
 * /
 *  *  *
 *  *  *   ************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *  *   ************************************************************************
 *  *  *
 * /
 */

import style from "./banner.module.css";
import { Link } from "react-router-dom";
import leoRow from "../../assets/bottomBanner/ocean_row.jpg";
import leoBlog from "../../assets/bottomBanner/leo_blog.jpg";
import crowdfunding from "../../assets/bottomBanner/crowdfunding.jpg";


const BottomBanner = () => {
  return (
    <div className={`${style.banner} p-3`}>
      <div className="container">
        <p className={`${style.title} text-center mt-2 mb-1`}>Kindred resources</p>
        <div className=" justify-content-around mb-2">
          <Link to={"https://www.leosrow.com/"} target="_blank" rel="noopener noreferrer">
            <img src={leoRow} className={`${style.img}  col-md-4 px-5`} />
          </Link>
          <Link to={"https://ukrivski.com/category/my-trips-to-ukraine/"} target="_blank" rel="noopener noreferrer">
            <img src={leoBlog} className={`${style.img}  col-md-4 px-5`} />
          </Link>
          <Link to={"https://www.justgiving.com/crowdfunding/leonid-krivskiy"} target="_blank" rel="noopener noreferrer">
            <img src={crowdfunding} className={`${style.img}  col-md-4 px-5`} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner