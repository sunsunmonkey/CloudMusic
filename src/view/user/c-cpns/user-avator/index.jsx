import React, { memo } from 'react'
import {UserAvatorWrapper} from "./style"


import leftArrow from '../../../../assets/images/leftArrow2.png'
import more from '../../../../assets/images/more.png'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

const UserAvator = memo((props) => {

  const { detailInfo } = useSelector((state)=>({
      detailInfo : state.selfInfo.detailInfo
  }),shallowEqual)


    const {level,createDays} = detailInfo
    

  
    const profile = detailInfo.profile || {}
    const {avatarUrl,nickname,followeds,follows, backgroundUrl:backgroundurl  } = profile


  const navigate =useNavigate()
  return (
    <UserAvatorWrapper backgroundurl={backgroundurl }>
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
          <img src={avatarUrl} alt="" />
        </div>
        <div className="name">
          {nickname} 
        </div>
        <div className="static">
        <div className="container">
        <div className="sub">
            {follows} 关注
          </div>
          <div className="fans">
             {followeds}  粉丝
          </div>
           <div className="level">
            Lv.{level}
           </div>
            </div>
      
        </div>
        <div className="label">
  
          <div className="item">IP:重庆</div>
          <div className="item">20后 天秤座</div>
          <div className="item">山西 太原</div>
          <div className="item">村龄{createDays}天</div>
        </div>
        <div className="edit" onClick={()=>{navigate('/edit')}}>
          <div className="wrapper">
          编辑资料
          </div>

        </div>
      </div>
    </UserAvatorWrapper>
  )
})

export default UserAvator