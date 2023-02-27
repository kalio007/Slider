import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider'

function App() {
  const Slides = [
    {
      title:"first imagee",
      url:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      title:"second Image",
      url:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    }
  ]
  const container = {
    width: '500px',
    height: '280px',
    margin: '0 auto'
  }
  return (
    <div>
      <h1>Hello kalio</h1>
      <div styles={container}>
      <ImageSlider Slides={Slides}/>
      </div>
    </div>
  )
}

export default App;
