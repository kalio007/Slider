import React from 'react'
import { useState } from 'react'

function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidestyles ={
        height: '100%',
        position:'relative'
    }
    const SlideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundposition:'center',
        backgroundSize:'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const LeftArrow = {
        position:'absolute',
        top:'50%',
        transform:"translate(0, -50%)",
        left:"32px",
        fontsize: "45px",
        zIndex:1,
        cursor:"pointer"
    }
    const rightArrow = {
        position: 'aboslute',
        top:'50%',
        transform:"translate(0, -50%)",
        right:"32px",
        fontsize: "45px",
        zIndex:1,
        cursor:"pointer"
         
    }
    const gotoPrev = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    const gotoNext = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const dotsStyle = {
        display:'flex',
        justify: 'center'
    }
    const gotoSlide =(slideIndex)=>{
        setCurrentIndex(slideIndex);
    }
    
  return (
    <div style={slidestyles}>
        <div style={LeftArrow} onClick={gotoPrev}>left</div>
        <div style={rightArrow} onClick={gotoNext}>Right</div>
        <div
        style={SlideStyle}>
        </div>
        <div >
            {
             slides.map((slide, slideIndex) => {
                <div key={slideIndex} style={dotsStyle} onClick={()=>gotoSlide(slideIndex)} >dots</div>
             })   
            }
        </div>
    </div>
  )
}

export default ImageSlider