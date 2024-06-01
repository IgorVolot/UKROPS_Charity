/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import style from "./header.module.css"
import { QUOTES_ARRAY } from "../../utils/constants"

const Header = () => {

  const quote = QUOTES_ARRAY[Math.floor(Math.random() * QUOTES_ARRAY.length)]

  return (
    <>
      <header>
        <div className={style.header}>
          <h1 className="text-center">UKROPS Medical Charity</h1>
          <h2 className={`${style.animateText} text-center`}>
            <q>{quote}</q>
          </h2>
          {/*<div className="alert alert-warning text-center">*/}
          {/*  <strong>Warning!</strong> 🚧 This site is still under development.  Some services do not work.  We*/}
          {/*  apologize for the inconvenience. 🚧*/}
          {/*</div>*/}
        </div>
      </header>
    </>
  )
}

export default Header


