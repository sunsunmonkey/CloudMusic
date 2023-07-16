import React, { memo } from 'react'
import {AvatorWrapper} from "./style"
import rightArrow from '../../../../assets/images/rightArrow.png'
import code from '../../../../assets/images/code.png'
import userimg from '../../../../assets/images/userimg.png'
const Avator = memo((props) => {
  return (
    <AvatorWrapper>
      <div className="content">
        <div className="avator_contain" onClick={()=>{
            alert(11)
        }}>
        <div className="avator">
            <img src={userimg} alt="" />
          </div>
          <div className="name">未登录</div>
          <div className="img_item">
          <img src= {rightArrow} alt="" />
          </div>
        </div>
        <div className="code">
          <img src={code} alt="" />
        </div>
      </div>
    </AvatorWrapper>
  )
})

export default Avator