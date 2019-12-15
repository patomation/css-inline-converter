import React, { useState } from 'react'
import { Button, Center, Gutter, Input, Grid } from '@patomation/react-ui-components/src'
import convert from './convert.js'
import colorLuminance from '../../modules/colorLuminance.js'

const silver = '#bfbdc1',
      gray = '#6d6a75',
      darkGray = '#37323e',
      lightOrange = '#deb841',
      darkOrange = '#de9e36'

const CssConverter = () => {

  const [input, setInput] = useState()
  const [output, setOutput] = useState()

  return (
    <div className='CssConverter' style={{color: darkOrange}}>
      <h1 style={{textAlign: 'center'}}>React Inline Style Converter</h1>
      <h3 style={{textAlign: 'center'}}>CSS to inline styles</h3>
      <Gutter/>
      <Gutter/>

      <Grid col={2} gap>
        <Input
          label='css'
          type='textarea'
          rows="6"
          value={input}
          onChange={ e => setInput(e.target.value)}
          color={lightOrange}
          background={colorLuminance(darkGray, -0.2)}
          inputStyle={{
            border: '1px solid #de9e36' //darkOrange
          }}
          />
        <Input
          label='inline css'
          type='textarea'
          rows="6"
          value={output}
          onChange={ e => setOutput(e.target.value)}
          color={lightOrange}
          background={colorLuminance(darkGray, -0.2)}
          inputStyle={{
            border: '1px solid #de9e36' //darkOrange
          }}
          />
      </Grid>
      <Gutter />

      <Button
        disabled={!input}
        center
        title='convert'
        color={darkGray}
        background={darkOrange}
        onClick={()=>{
          console.log(input);
          console.log((convert(input)));
          setOutput(convert(input))
      }}/>
    </div>
  )
}

export default CssConverter
