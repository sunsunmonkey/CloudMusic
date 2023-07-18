import React, { memo } from 'react'
import {AllListBarWrapper} from "./style"
import ListBar from '../../../../base-ui/list-bar'
import LogOut from '../../../log-out'
import { musicServer, mybottom, mycenter, others } from '../../../../assets/data/slide-data'
import blackAlbum from '../../../../assets/images/blackAlbum.png'
const AllListBar = memo((props) => {
  return (
    <AllListBarWrapper>
      <div className="black">
        <img src={blackAlbum} alt="" />
      </div>
      <ListBar message = {mycenter}></ListBar>
      <ListBar message = {musicServer}></ListBar>
      <ListBar message={others}></ListBar>
      <ListBar message={mybottom}></ListBar>
      <LogOut></LogOut>
    </AllListBarWrapper>
  )
})

export default AllListBar