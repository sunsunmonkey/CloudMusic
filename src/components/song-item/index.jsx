import React, { memo } from 'react'
import {SongItemWrapper} from "./style"
import moreLightGrey from '../../assets/images/moreLightGrey.png'
import { handleAr } from '../../utils/handleAr'
const SongItem = memo(({data,index}) => {
    const {name, ar  ,playIndex, handleClick} =data
    console.log(ar)


  return (
    <SongItemWrapper onClick={handleClick}>
        
        <div className="left">
        <div className="num">
            {index+1}
        </div>
        <div className="center">
            <div className={"title "+playIndex===index?"active":""}>{name}</div>
            <div className="artist">{handleAr(ar)}</div>
        </div>
        </div>
        
        <div className="more">
            <img src={moreLightGrey} alt="" />
        </div>
    </SongItemWrapper>
  )
})

export default SongItem