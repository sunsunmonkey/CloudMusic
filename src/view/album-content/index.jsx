import React, { memo, useRef } from 'react'
import {AlbumContentWrapper} from "./style"
import HeaderSection from './c-cpns/header-section'
import ListSection from './c-cpns/list-section'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getAlbumDetail } from '../../services/modules/album'
import { useState } from 'react'
import { vhTransferPX } from '../../utils/pxAndVh'

const AlbumContent = memo((props) => {
  const AlbumContainerRef  = useRef()
  const [isTop,setIsTop] = useState(false)
  const [albumDetail,setAlbumDetail] = useState({})
  const  {id} =useParams()
    useEffect(()=>{
      getAlbumDetail(id).then(res=>{
        setAlbumDetail(res)
      })
    },[id]) 
    
    useEffect(()=>{
      const AlbumContainer =  AlbumContainerRef.current
      function handleScroll(){
        if(AlbumContainer.scrollTop >= vhTransferPX(30)) {
          setIsTop(true)
          AlbumContainer.scrollTop = vhTransferPX(30)
        }
      }
      AlbumContainer.addEventListener("scroll",handleScroll)
      return ()=>{
        AlbumContainer.removeEventListener("scroll",handleScroll)
      }
    },[AlbumContainerRef])


  return (
    <AlbumContentWrapper ref={AlbumContainerRef}>
      <HeaderSection isTop={isTop} albumDetail={albumDetail}></HeaderSection>
      <ListSection></ListSection>
    </AlbumContentWrapper>
  )
})

export default AlbumContent