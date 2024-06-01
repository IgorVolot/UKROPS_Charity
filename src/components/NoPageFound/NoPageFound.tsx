/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import "./noPageFound.module.css"
import error404 from "../../assets/logo/error_404_img.png"

export default function NoPageFound(): JSX.Element {
  return (
    <>
      <section className="text-center">
        <h1>We're sorry.</h1>
        <img className="wrong_way" src={error404} alt="404" />
        <p>The page you are looking for does not exist.</p>
        <p>Please return to the <a href="/home">UKROPs Medical Charity</a> home page</p>
      </section>
    </>
  )
}
