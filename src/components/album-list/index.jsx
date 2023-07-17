import React, { memo } from 'react'
import {AlbumListWrapper} from "./style"
import AlbumItem from '../../base-ui/album-item'

const AlbumList = memo((props) => {
  const {list,title} = props
  return (
    <AlbumListWrapper>
      <div className="top">
      <h4>{title}</h4>
      <div className="num">({list?.length})</div>
      </div>
     
      <div className="main">
        {
          list?.map(item=>{
            const {coverImgUrl,trackCount,name, id
            } = item
            return  <AlbumItem 
            key = {id}
            id = {id}
            trackCount={trackCount}
            coverImgUrl={coverImgUrl}
            name ={name}
            ></AlbumItem>
          })
        }

      </div>
  
    </AlbumListWrapper>
  )
})

export default AlbumList