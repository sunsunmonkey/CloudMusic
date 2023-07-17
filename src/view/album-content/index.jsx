import React, { memo } from 'react'
import {AlbumContentWrapper} from "./style"
import HeaderSection from './c-cpns/header-section'
import ListSection from './c-cpns/list-section'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getAlbumDetail } from '../../services/modules/album'
import { useState } from 'react'

const AlbumContent = memo((props) => {
  const [albumDetail,setAlbumDetail] = useState({})
 const  {id} =useParams()
    useEffect(()=>{
      getAlbumDetail(id).then(res=>{
        setAlbumDetail(res)
      })
    },[id]) 

  return (
    <AlbumContentWrapper>
      <HeaderSection albumDetail={albumDetail}></HeaderSection>
      <ListSection></ListSection>
    </AlbumContentWrapper>
  )
})

export default AlbumContent