import React, {useState} from "react";

import { Button, Center, Panel, Gutter } from '@patomation/react-ui-components'
import CssConverter from './components/CssConverter'
import colorLuminance from './modules/colorLuminance.js'

const darkGray = '#37323e'

const App = () =>

<div className='app'>
  <Center maxWidth='800px'>
    <Panel
      className='panel'
      style={{
        background: colorLuminance(darkGray, -0.1)
      }}>
      <CssConverter />
    </Panel>
  </Center>
</div>

export default App;
