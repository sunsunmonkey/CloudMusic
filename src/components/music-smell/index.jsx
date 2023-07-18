import React, { memo } from 'react'
import {MusicSmellWrapper} from "./style"

const MusicSmell = memo(({color,top,center,bottom}) => {
  
  return (
    <MusicSmellWrapper color={color}>
      <div className="top">
        <div className="desc">{top}</div>
        <div className="number">{center}</div>
      </div>
      <div className="bottom">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="bottom-desc">{bottom}</div>
        </div>
    </MusicSmellWrapper>
  )
})

export default MusicSmell