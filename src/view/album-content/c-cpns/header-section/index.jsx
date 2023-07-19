import React, { memo } from 'react'
import {HeaderSectionWrapper} from "./style"
import leftArrow2 from '../../../../assets/images/leftArrow2.png'
import more from '../../../../assets/images/more.png'
import search from '../../../../assets/images/search.png'
import AlbumContentItem from '../../../../components/album-content-item'
import rightArrowWhite from '../../../../assets/images/rightArrowWhite.png'
import AlbumButton from '../../../../components/album-button'
import { useNavigate } from 'react-router-dom'
import { handleNumber } from '../../../../utils/handleNumber'
const HeaderSection = memo((props) => {

  const {isTop} = props
  const navigate = useNavigate()
  const iconPath = ["./img/albumShare.png","./img/commend.png","./img/albumSub.png"]
  let albumContentItem ={}
  let buttonCount =[]

  if(props.albumDetail?.playlist) {
    const {name,coverImgUrl:coverimgurl,
      tags,description,
      commentCount,subscribedCount,
      shareCount
    } = props.albumDetail.playlist
    const {avatarUrl,nickname} = props.albumDetail.playlist.creator
    
    buttonCount.push(shareCount)
    buttonCount.push(commentCount)
    buttonCount.push(subscribedCount)
 

    albumContentItem={name,
      coverimgurl,tags,
      description,
      creator:{
        avatarUrl,nickname
      }
    }
  }

  return (
    <HeaderSectionWrapper coverimgurl={albumContentItem.coverimgurl}>
      <div className="top">
        <div className="left">
        <div className="back" onClick={()=>navigate('/user')}><img src={leftArrow2} alt=""  /></div>
        <div className="title">{isTop? albumContentItem.name:"歌单"}</div>
        </div>
        <div className="right">
          <div className="search">
            <img src={search} alt="" />
          </div>
          <div className="more">
            <img src={more} alt="" />
          </div>
        </div>
        <div className="img-cover"></div>
      </div>
      <div className="main">
        <AlbumContentItem albumContentItem={albumContentItem} ></AlbumContentItem>
        <div className="cover"></div>
        {albumContentItem.description&&<div className="album-desc">
        <div className="word" >
        {albumContentItem.description}
        </div>
        <div className="arrow">
          <img src={rightArrowWhite} alt="" />
        </div>
        </div>}
        <div className="button-list">
      
      
        {buttonCount?.map((item,index)=>{
          return  <AlbumButton count={handleNumber( item)} key={index} src={ iconPath[index]}></AlbumButton>
        })}
        </div>
      </div>
      
    </HeaderSectionWrapper>
  )
})

export default HeaderSection