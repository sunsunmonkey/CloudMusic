import React, { memo } from 'react'
import {UserAvatorWrapper} from "./style"

import userimg from '../../../../assets/images/userimg.png'
import leftArrow from '../../../../assets/images/leftArrow2.png'
import more from '../../../../assets/images/more.png'
import { useNavigate } from 'react-router-dom'
const UserAvator = memo((props) => {
  const navigate =useNavigate()
  return (
    <UserAvatorWrapper>
      <div className="bc">
        <div className="main">
          <div className="left"
          onClick={()=>{ navigate('/home')}}
          >
            <img src={leftArrow} alt="" />
            </div>
          <div className="right">
          <img src={more} alt="" />
          </div>
        </div>
      
      </div>
      <div className="avator-card">
        <div className="avator-img">
          <img src={userimg} alt="" />
        </div>
        <div className="name">
          未登录
        </div>
        <div className="static"></div>
        <div className="label"></div>
        <div className="edit"></div>
      </div>
    </UserAvatorWrapper>
  )
})

export default UserAvator