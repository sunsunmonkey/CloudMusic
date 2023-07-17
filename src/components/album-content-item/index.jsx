import React, { memo } from 'react'
import {AlbumContentItemWrapper} from "./style"
import Tag from '../tag'
import jia from '../../assets/images/jia.png'
const AlbumContentItem = memo((props) => {
    console.log(props.albumContentItem)
    const {name,coverImgUrl,tags,creator}= props.albumContentItem


  return (
    <AlbumContentItemWrapper >
    <div className="left">
        <div className="cover">
            <img src={coverImgUrl} alt="" />
        </div>
        <div className="num"></div>
    </div>
    <div className="right">
        <div className="title">{name}</div>
        <div className="creator">
            <div className="avator">
                <img src={creator?.avatarUrl} alt="" />
            </div>
            <div className="name">{creator?.nickname}</div>
            <div className="sub">
                <div className="jia">
                <img src={jia} alt="" />
                </div>
                <div className="desc">关注</div>
            </div>
        </div>
        <div className="tag-list">
        {
            tags?.map((item)=>{
                return <Tag item={item}></Tag>
            })
        }
        </div>
       
    </div>
    </AlbumContentItemWrapper>
  )
})

export default AlbumContentItem