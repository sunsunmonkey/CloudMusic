import React, { memo } from 'react'
import {UserWrapper} from "./style"
import UserAvator from './c-cpns/user-avator'
import UserMain from './c-cpns/user-main'
import UserTab from './c-cpns/user-tab'

const User = memo((props) => {
  return (
    <UserWrapper>
      <UserAvator></UserAvator>
      <UserTab></UserTab>
      <UserMain></UserMain>
    </UserWrapper>
  )
})

export default User