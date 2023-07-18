import React, { memo, useState } from 'react'
import {UserTabWrapper} from "./style"
import { useNavigate } from 'react-router-dom'

const UserTab = memo((props) => {
  const [selectIndex,setSelectIndex]= useState(0)
  const itemList = ["主页","动态","博客"]
  const navigate = useNavigate()
  return (
    <UserTabWrapper>
      <div className="tab-list">
        {
          itemList.map((item,index)=>{
            return(
              <div 
              onClick={()=>{
                setSelectIndex(index)
                if(index ===0){
                  navigate('/user')
                }else if(index === 1){
                  navigate('/user/moment')
                }else if(index === 2){
                  navigate('/user/blog')
                }
              }}
              className={"item "+ (index===selectIndex?"active": "")} 
              key={item}>
                {item}
              </div>
            )
          })
        }
      </div>
    </UserTabWrapper>
  )
})

export default UserTab