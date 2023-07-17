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
    console.log(albumDetail)
  return (
    <AlbumContentWrapper>
      <HeaderSection></HeaderSection>
      <ListSection></ListSection>
    </AlbumContentWrapper>
  )
})

export default AlbumContent