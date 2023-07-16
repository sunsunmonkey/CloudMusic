import React, { memo } from 'react'
import {AlbumItemWrapper} from "./style"
import userBackGround from '../../assets/images/userBackGround.jpg'

const AlbumItem = memo((props) => {
  return (
    <AlbumItemWrapper>
      <div className="left"><img src={userBackGround} alt="" /></div>
      <div className="right">
        <div className="title">
          我的歌单          
        </div>
        <div className="desc">12首</div>
      </div>
    </AlbumItemWrapper>
  )
})

export default AlbumItem