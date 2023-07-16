import React, { memo } from 'react'
import {AllListBarWrapper} from "./style"
import ListBar from '../../../../base-ui/list-bar'

const AllListBar = memo((props) => {
  return (
    <AllListBarWrapper>
      <ListBar></ListBar>
      <ListBar></ListBar>
      <ListBar></ListBar>
      <ListBar></ListBar>
    </AllListBarWrapper>
  )
})

export default AllListBar