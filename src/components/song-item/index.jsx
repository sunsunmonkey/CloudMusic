import React, { memo } from 'react'
import {SongItemWrapper} from "./style"
import moreLightGrey from '../../assets/images/moreLightGrey.png'
const SongItem = memo((props) => {
  return (
    <SongItemWrapper>
        
        <div className="left">
        <div className="num">
            1
        </div>
        <div className="center">
            <div className="title">路由表子路由</div>
            <div className="artist">路由表子路由路由表子路由路由表子路由</div>
        </div>
        </div>
        
        <div className="more">
            <img src={moreLightGrey} alt="" />
        </div>
    </SongItemWrapper>
  )
})

export default SongItem