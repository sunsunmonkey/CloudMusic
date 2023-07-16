import React, { memo } from 'react'
import {AlbumListWrapper} from "./style"
import AlbumItem from '../../base-ui/album-item'

const AlbumList = memo((props) => {
  return (
    <AlbumListWrapper>
      <div className="top">
      <h4>创建的歌单</h4>
      <div className="num">(10)</div>
      </div>
     
      <div className="main">
      <AlbumItem></AlbumItem>
      <AlbumItem></AlbumItem>
      <AlbumItem></AlbumItem>
      <AlbumItem></AlbumItem>
      </div>
  
    </AlbumListWrapper>
  )
})

export default AlbumList