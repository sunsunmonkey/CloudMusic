import React, { memo, useEffect, useState } from 'react'
import {ListSectionWrapper} from "./style"
import palyAll from '../../../../assets/images/palyAll.png'
import SongItem from '../../../../components/song-item'
import {gatAllSong} from '../../../../services/modules/album'
import { useParams } from 'react-router-dom'

const ListSection = memo((props) => {
  const [sonList,setSongList] = useState([])
  const {id} = useParams()
  const [playIndex,setPlayIndex] = useState()
  useEffect(()=>{
    gatAllSong(id).then(res=>{
      setSongList(res.songs)
    })
  },[id])


  return (
    <ListSectionWrapper>
      <div className="play-all">
        <div className="play-img">
          <img src={palyAll} alt="" />
        </div>
        <div className="desc">播放全部</div>
        <div className="num">({sonList.length})</div>
      </div>
      <div className="song-list">
      {
        sonList.map((item,index)=>{
        return <SongItem 
        key={item.id} 
        data={item} 
        index={index}
        playIndex={playIndex}
        handleClick={()=>{
          setPlayIndex(index)
        }}
        ></SongItem>
        })
      }
      </div>

    </ListSectionWrapper>
  )
})

export default ListSection