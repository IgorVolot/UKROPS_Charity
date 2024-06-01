/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import {Outlet} from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import BottomBanner from "../components/BottomBanner/BottomBanner"


const MainLayOut = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet />
      <BottomBanner />
      <Footer />
    </>
  )
}

export default MainLayOut

