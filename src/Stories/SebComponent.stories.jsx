import React, { useState } from "react";
import {SebComponent} from "../Components/SebComponent/SebComponent"

export default {
  title: 'SebTest',
  component: SebComponent
}

export const SebbieTest = () => {
  const [sebState, setSebstate] = useState();

  return(
   <SebComponent name={'seb'}/>
  )
}