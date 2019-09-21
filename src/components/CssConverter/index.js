import React, { useState } from 'react'
import { Button, Center, Gutter, Grid } from '@patomation/react-ui-components'
import convert from './convertPropTypes.js';

const CssConverter = () => {

  const [value, setValue] = useState()

  let textAreaRef = null;

  return (
    <div className='CssConverter'>
      <h1 style={{textAlign: 'center'}}>React Inline Style Converter</h1>
      <h3 style={{textAlign: 'center'}}>CSS to inline styles</h3>
      <Gutter/>

      <textarea
        ref={ ref => {
          textAreaRef = ref
        }}
        rows="10"
        cols="60"
        value={value}
        onChange={ e => setValue(e.target.value)}
        style={{
          width: '100%',

        }}>
      </textarea>
      <Gutter />


      <Grid col={2} gap={'1rem'}>
        <Button title='convert' onClick={()=>{
          console.log(value);
          console.log((convert(value)));
          setValue(convert(value))
          //TODO: Auto copy not working
          // textAreaRef.select();
          // document.execCommand('copy')
        }}/>

        <Button title='copy' onClick={()=>{
          textAreaRef.select();
          document.execCommand('copy')
        }} />
      </Grid>
    </div>
  )
}

export default CssConverter
