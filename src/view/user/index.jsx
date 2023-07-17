import React, { memo } from 'react'
import {UserWrapper} from "./style"
import UserAvator from './c-cpns/user-avator'
import UserMain from './c-cpns/user-main'
import UserTab from './c-cpns/user-tab'
import { shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchalbum } from '../../store/modules/album'
import { fetchSelfInfo } from '../../store/modules/self-info'
import { loginToken } from '../../utils/loginToken'

const User = memo((props) => {
  const dispatch = useDispatch()

  const { userId} = useSelector((state)=>({
    userId:state.selfInfo.baseInfo.userId,
  }),shallowEqual)

  const cookie = loginToken()

  useEffect(()=>{
    if(cookie)  dispatch(fetchSelfInfo())
    if(userId) dispatch(fetchalbum(userId))
  },[dispatch,userId,cookie])

  return (
    <UserWrapper>
      <UserAvator></UserAvator>
      <UserTab></UserTab>
      <UserMain ></UserMain>
    </UserWrapper>
  )
})

export default User