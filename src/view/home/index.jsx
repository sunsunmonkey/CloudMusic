import {  useEffect, useRef, useState } from "react"
import SliderBox from "../../components/slide-box"
import '../../assets/css/reset.css'
import { HomeWrapper } from "./style"
import React from "react"
import { pxTransferVW, vwTransferPX } from "../../utils/pxAndVW"
import { loginToken } from "../../utils/loginToken"
import { fetchSelfInfo } from "../../store/modules/self-info"
import { useDispatch } from "react-redux"


function Home() {

  const dispatch = useDispatch()
  const cookie = loginToken()

  useEffect(()=>{
    if(cookie)  dispatch(fetchSelfInfo())
  },[dispatch,cookie])

  const [ distance , setDistance] = useState(0)
  const [ isShow ,  setIsShow ] = useState(false)
  const [isOut ,setIsOut] = useState(false)
  const [transition , setTransition] = useState('none')
  const positonStart = useRef(0)
  const positonEnd = useRef(0)


  function handleTouchStart(event){
    if (event.targetTouches[0].pageX < 12 || isShow ) {
      setIsShow(true)
      positonStart.current = event.targetTouches[0].pageX
    }

  
  }

  function handleTouchMove(event){

    if( pxTransferVW(distance)>81 ) return
    setTransition('none')
    positonEnd.current = event.targetTouches[0].pageX
    const distances = positonEnd.current - positonStart.current

    let resDis;
    if(isOut){
      if(distances>0){
        return
      }else{
        resDis =vwTransferPX(80)+distances 
      }
     
    }else{
      resDis = distances
    }
    setDistance(resDis)
  }

  function handleTouchEnd(){
    setTimeout(()=>{
      setTransition('all .3s')
    })
    if(distance>0){
      if(distance>vwTransferPX(80/2)) { 
        setDistance(vwTransferPX(80) )
        setIsOut(true)
      }else{
        setDistance(0)
        setIsOut(false)
      }
    }
  }
  function sonCallback(){
    setTransition('all .3s')
    setDistance(0)
    setIsOut(false)
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