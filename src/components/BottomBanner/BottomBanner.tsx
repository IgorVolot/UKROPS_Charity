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
import { Link } from "react-router-dom"


const BottomBanner = () => {
  return (
    <div className={`${style.banner} p-3`}>
      <div className="container">
        <p className={`${style.title} text-center mt-2 mb-1`}>Kindred resources</p>
        <div className=" justify-content-around mb-2">
          <Link to={"https://www.leosrow.com/"} target="_blank" rel="noopener noreferrer">
            <img src="../src/assets/bottomPreFooter/ocean_row.jpg" className={`${style.img}  col-md-4 px-5`} />
          </Link>
          <Link to={"https://ukrivski.com/category/my-trips-to-ukraine/"} target="_blank" rel="noopener noreferrer">
            <img src="../src/assets/bottomPreFooter/leo_blog.jpg" className={`${style.img}  col-md-4 px-5`} />
          </Link>
          <Link to={"https://www.justgiving.com/crowdfunding/leonid-krivskiy"} target="_blank" rel="noopener noreferrer">
            <img src="../src/assets/bottomPreFooter/crowfunding.jpg" className={`${style.img}  col-md-4 px-5`} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner