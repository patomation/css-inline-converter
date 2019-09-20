import React, { useState } from 'react'
import { Button, Center, Gutter } from '@patomation/react-ui-components'
import convert from './convert.js';

const CssConverter = () => {

  const [value, setValue] = useState()

  return (
    <div className='CssConverter'>
      <h1 style={{textAlign: 'center'}}>React Inline Style Converter</h1>
      <h3 style={{textAlign: 'center'}}>CSS to inline styles</h3>
      <Gutter/>

      <textarea
        rows="10"
        cols="60"
        value={value}
        onChange={ e => setValue(e.target.value)}
        style={{
          width: '100%',

        }}>
      </textarea>
      <Gutter />

      <Button center title='convert' onClick={()=>{
        console.log(value);
        console.log((convert(value)));
        setValue(convert(value))
      }}/>
    </div>
  )
}

export default CssConverter
