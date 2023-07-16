import React, { memo } from 'react'
import {MusicSmellWrapper} from "./style"

const MusicSmell = memo((props) => {
  return (
    <MusicSmellWrapper>
      <div className="top">
        <div className="desc">我的喜欢</div>
        <div className="number">105首</div>
        <div className="bottom">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="bottom-desc">喜欢的音乐</div>
        </div>
      </div>
    </MusicSmellWrapper>
  )
})

export default MusicSmell