/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/

import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox"
import {PaletteTree} from "./palette"
import Navigation from "../components/Navigation/Navigation"
import OurProjects from "../components/OurProjects/OurProjects"

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Navigation">
        <Navigation />
      </ComponentPreview>
      <ComponentPreview path="/OurProjects">
        <OurProjects />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews