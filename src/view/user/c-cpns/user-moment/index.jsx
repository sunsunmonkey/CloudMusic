import React, { memo } from 'react'
import {UserMomentWrapper} from "./style"

const UserMoment = memo((props) => {
  return (
    <UserMomentWrapper>
      <div className="main">
      暂时还没有动态哦~
      </div>
    </UserMomentWrapper>
  )
})

export default UserMoment