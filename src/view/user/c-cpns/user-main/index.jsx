import React, { memo } from 'react'
import {UserMainWrapper} from "./style"
import MusicSmell from '../../../../components/music-smell'

const UserMain = memo((props) => {
  return (
    <UserMainWrapper>
      <div className="music-smell-list">
        <h4>音乐品味</h4>
        <div className="music-smell">
        <MusicSmell></MusicSmell>
        <MusicSmell></MusicSmell>
        <MusicSmell></MusicSmell>
        </div>
    
      </div>
    </UserMainWrapper>
  )
})

export default UserMain