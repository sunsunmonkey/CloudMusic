import  {  memo, useState} from 'react'
import {SlideBoxWrapper} from "./style"
import { vwTransferPX } from '../../utils/pxAndVW.js'
import Avator from './c-cpns/avator'
import AllListBar from './c-cpns/all-list-bar'

const SliderBox= memo((props) => {
  const [mask , setMask] = useState('block')
  const { distance, transition ,sonCallback} = props
  
  const transparency = (0.5/vwTransferPX(80))*distance

  if(distance > 0 && mask!=='block') setMask('block')
  if(distance === 0 && mask!=='none') setTimeout(() => {
    setMask('none')
  }, 300); 


  return (
    <SlideBoxWrapper >
      <div className="mask" style={{transition:'all .3s', display : mask , backgroundColor: `rgb(0,0,0,${transparency})`}} onClick={sonCallback}></div>
      <div className="selfinfo" style={{transform:`translateX(${distance}px)`,transition:`${transition}`}}>
        <Avator></Avator>
        <AllListBar></AllListBar>
      </div>
    </SlideBoxWrapper>
  )
})

export default SliderBox