import React, { memo } from 'react'
import {AlbumContentItemWrapper} from "./style"
import Tag from '../tag'
import userBackGround from '../../assets/images/userBackGround.jpg'
import jia from '../../assets/images/jia.png'
const AlbumContentItem = memo((props) => {
  return (
    <AlbumContentItemWrapper>
    <div className="left">
        <div className="cover">
            <img src={userBackGround} alt="" />
        </div>
        <div className="num"></div>
    </div>
    <div className="right">
        <div className="title">嵌套路由 - Vue Router嵌套路由 - Vue Router</div>
        <div className="creator">
            <div className="avator">
                <img src={userBackGround} alt="" />
            </div>
            <div className="name">GangGree</div>
            <div className="sub">
                <div className="jia">
                <img src={jia} alt="" />
                </div>
                <div className="desc">关注</div>
            </div>
        </div>
        <div className="tag-list">
        <Tag></Tag>
        <Tag></Tag>
        </div>
       
    </div>
    </AlbumContentItemWrapper>
  )
})

export default AlbumContentItem