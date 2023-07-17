import React, { memo } from 'react'
import {ListSectionWrapper} from "./style"
import palyAll from '../../../../assets/images/palyAll.png'
import SongItem from '../../../../components/song-item'
const ListSection = memo((props) => {
  return (
    <ListSectionWrapper>
      <div className="play-all">
        <div className="play-img">
          <img src={palyAll} alt="" />
        </div>
        <div className="desc">播放全部</div>
        <div className="num">(255)</div>
      </div>
      <SongItem></SongItem>
      <SongItem></SongItem>
    </ListSectionWrapper>
  )
})

export default ListSection