import React, { memo } from 'react'
import {AlbumItemWrapper} from "./style"
import more from '../../assets/images/more_album.png'
import { useNavigate } from 'react-router-dom'
const AlbumItem = memo((props) => {
  const {coverImgUrl,trackCount,name ,id} = props
  const navigate =useNavigate()

    function  handleClick(){
      navigate(`/album/${id}`)
    }


  return (
    <AlbumItemWrapper onClick={handleClick}>
      <div className="left"><img src={coverImgUrl} alt="" /></div>
      <div className="right">
        <div className="title">
         {name}            
        </div>
        <div className="desc">{trackCount}首</div>
      </div>
      <div className="more">
        <img src={more} alt="" />
      </div>
    </AlbumItemWrapper>
  )
})

export default AlbumItem