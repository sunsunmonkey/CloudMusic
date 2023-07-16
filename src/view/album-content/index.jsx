import React, { memo } from 'react'
import {AlbumContentWrapper} from "./style"
import HeaderSection from './c-cpns/header-section'
import ListSection from './c-cpns/list-section'

const AlbumContent = memo((props) => {
  return (
    <AlbumContentWrapper>
      <HeaderSection></HeaderSection>
      <ListSection></ListSection>
    </AlbumContentWrapper>
  )
})

export default AlbumContent