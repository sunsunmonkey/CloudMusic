import React, { memo } from 'react'
import {HeaderSectionWrapper} from "./style"
import arrowLeftBlack from '../../../../assets/images/arrowLeftBlack.png'
import { useNavigate } from 'react-router-dom'
const HeaderSection = memo((props) => {
    const navigate = useNavigate()
  return (
    <HeaderSectionWrapper>
      
      <div className="left">
        <img src={arrowLeftBlack} alt=""  onClick={()=>{navigate('/user')}}/>
         <div className="title">我的资料</div>
      </div>

    </HeaderSectionWrapper>
  )
})

export default HeaderSection