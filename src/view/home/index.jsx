import {  useRef, useState } from "react"
import SliderBox from "../../components/slide-box"
import '../../assets/css/reset.css'
import { HomeWrapper } from "./style"
import React from "react"
import { pxTransferVW, vwTransferPX } from "../../utils/pxAndVW"

function Home() {

  const [ distance , setDistance] = useState(0)
  const [ isShow ,  setIsShow ] = useState(false)
  const [transition , setTransition] = useState('none')
  const positonStart = useRef(0)
  const positonEnd = useRef(0)


  function handleTouchStart(event){
    if (event.targetTouches[0].pageX < 12) {
      setIsShow(true)
      positonStart.current = event.targetTouches[0].pageX
    }

  
  }
  function handleTouchMove(event){
    if( pxTransferVW(distance)>80 ) return
    setTransition('none')
    positonEnd.current = event.targetTouches[0].pageX
    const distances = positonEnd.current - positonStart.current
    setDistance(distances )
    
  }
  function handleTouchEnd(){
    setTimeout(()=>{
      setTransition('all .3s')
    })
    if(distance>vwTransferPX(80/2)) { 
      setDistance(vwTransferPX(80) ) 
    }else{
      setDistance(0)
    }
  }
  function sonCallback(){
    setTransition('all .3s')
    setDistance(0)
  }
  return (
    <HomeWrapper  
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}>
     {isShow &&<SliderBox 
      distance={distance}
      transition={transition}
      sonCallback={sonCallback}
     ></SliderBox>}
    
     {
      
     }
    </HomeWrapper>
  )
}
export default Home