import React, { memo, useState } from 'react'
import {UserTabWrapper} from "./style"

const UserTab = memo((props) => {
  const [selectIndex,setSelectIndex]= useState(0)
  const itemList = ["主页","动态","博客"]
  return (
    <UserTabWrapper>
      <div className="tab-list">
        {
          itemList.map((item,index)=>{
            return(
              <div 
              onClick={()=>setSelectIndex(index)}
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