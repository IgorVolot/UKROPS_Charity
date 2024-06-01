/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import "./App.css"

import Contacts from "./components/Contacts/Contacts"
import Home from "./components/HomePage/Home"
import OurMission from "./components/OurMission/OurMission"
import OurProject from "./components/OurProjects/OurProjects"
import {Route, Routes} from "react-router-dom"
import MainLayOut from "./layouts/MainLayOut"
import NoPageFound from "./components/NoPageFound/NoPageFound"
import React from "react"
import AboutUs from "./components/AboutUs/AboutUs"
import LeoKrivskiy from "./components/AboutUs/LeoKriskiy/LeoKriskiy"
import AnnaHunter from "./components/AboutUs/AnnaHunter/AnnaHunter"
import JustasMazunaitis from "./components/AboutUs/JustasMazunaitis/JustasMazunaitis"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"


const App = () => {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          {['', `/`, '/home'].map(path => <Route key={path} path={path} element={<Home />} />)}
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/leo" element={<LeoKrivskiy />} />
          <Route path="/anna" element={<AnnaHunter />} />
          <Route path="/justas" element={<JustasMazunaitis />} />
          <Route path="/our_mission" element={<OurMission />} />
          <Route path="/our_projects" element={<OurProject />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
