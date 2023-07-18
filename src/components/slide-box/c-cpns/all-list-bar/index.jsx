import React, { memo } from 'react'
import {AllListBarWrapper} from "./style"
import ListBar from '../../../../base-ui/list-bar'
import LogOut from '../../../log-out'

const AllListBar = memo((props) => {
  return (
    <AllListBarWrapper>
      <ListBar message = {['我的音乐', "云被中兴", "创作中心",'我的']}></ListBar>
      <ListBar message = {['我的音乐', "云被中兴", "创作中心",'我的']}></ListBar>
      <ListBar></ListBar>
      <ListBar></ListBar>
      <LogOut></LogOut>
    </AllListBarWrapper>
  )
})

export default AllListBar