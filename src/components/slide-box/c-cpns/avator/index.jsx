import React, { memo } from 'react'
import {AvatorWrapper} from "./style"
import rightArrow from '../../../../assets/images/rightArrow.png'
import code from '../../../../assets/images/code.png'
import userimg from '../../../../assets/images/userimg.png'
import { useNavigate } from 'react-router-dom'
import { loginToken } from '../../../../utils/loginToken'
import { useSelector ,  shallowEqual} from 'react-redux'
const Avator = memo((props) => {
  const  navigate= useNavigate()

   const { avatorUrl , nickname} =  useSelector(state=>({
    avatorUrl: state.selfInfo.baseInfo.avatorUrl,
    nickname: state.selfInfo.baseInfo.nickname
   }),shallowEqual)
  
  const token = loginToken()
  return (
    <AvatorWrapper>
      <div className="content">
        <div className="avator_contain" onClick={()=>{
          if(token){
            navigate('/user')
          }else{
            navigate('/login')
          }
            
        }}>
        <div className="avator">
            <img src={userimg} alt="" />
          </div>
          <div className="name">{nickname}</div>
          <div className="img_item">
          <img src= {rightArrow} alt="" />
          </div>
        </div>
        <div className="code">
          <img src={!token? code : avatorUrl } alt="" />
        </div>
      </div>
    </AvatorWrapper>
  )
})

export default Avator