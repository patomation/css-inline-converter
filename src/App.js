import React, {useState} from "react";

import { Button, Center, Panel, Gutter } from '@patomation/react-ui-components'
import CssConverter from './components/CssConverter'

const App = () =>

<div className='app'>
  <Center>
    <Panel className='panel'>
      <CssConverter />
    </Panel>
  </Center>
</div>

export default App;
