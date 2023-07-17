import React, { memo } from 'react'
import {UserMainWrapper} from "./style"
import MusicSmell from '../../../../components/music-smell'
import AlbumList from '../../../../components/album-list'
import { shallowEqual,  useSelector } from 'react-redux'




const UserMain = memo((props) => {

  const { userId , playlist} = useSelector((state)=>({
    userId:state.selfInfo.baseInfo.userId,
    playlist:state.album.data.playlist
  }),shallowEqual)





  const myList = playlist?.filter((item)=>{
        return item.creator.userId ===  userId 
    })
  const otherList =  playlist?.slice(myList.length)

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
      <AlbumList list={myList} title={"创建的歌单"}/>
      <AlbumList list={otherList} title={"收藏的歌单"}/>
    </UserMainWrapper>
  )
})

export default UserMain