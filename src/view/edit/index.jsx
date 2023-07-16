import React, { memo } from 'react'
import {EditWrapper} from "./style"

import ContentList from './c-cpns/content-list'
import HeaderSection from './c-cpns/header-section'

const Edit = memo((props) => {
  return (
    <EditWrapper>
      <HeaderSection></HeaderSection>
      <ContentList></ContentList>
    </EditWrapper>
  )
})

export default Edit