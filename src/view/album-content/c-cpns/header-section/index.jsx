import React, { memo } from 'react'
import {HeaderSectionWrapper} from "./style"
import leftArrow2 from '../../../../assets/images/leftArrow2.png'
import more from '../../../../assets/images/more.png'
import search from '../../../../assets/images/search.png'
import AlbumContentItem from '../../../../components/album-content-item'
import rightArrowWhite from '../../../../assets/images/rightArrowWhite.png'
import AlbumButton from '../../../../components/album-button'
const HeaderSection = memo((props) => {
  return (
    <HeaderSectionWrapper>
      <div className="top">
        <div className="left">
        <div className="back"><img src={leftArrow2} alt=""  /></div>
        <div className="title">歌单</div>
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
        <AlbumContentItem></AlbumContentItem>
        <div className="cover"></div>
        <div className="album-desc">
        <div className="word">
        模糊的半径，值为它定义了高斯函数的标准偏差值，即屏幕上有多少像素相互融合; 因此，较大的值会产生更多模糊。值为 0 会使输入保持不变。该值为空则为 0。
        </div>
        <div className="arrow">
          <img src={rightArrowWhite} alt="" />
        </div>
        </div>
        <div className="button-list">
          <AlbumButton></AlbumButton>
          <AlbumButton></AlbumButton>
          <AlbumButton></AlbumButton>
        </div>
      </div>
      
    </HeaderSectionWrapper>
  )
})

export default HeaderSection