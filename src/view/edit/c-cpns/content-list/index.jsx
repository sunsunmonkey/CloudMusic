import React, { memo } from 'react'
import {ContentListWrapper} from "./style"
import EditItem from '../../../../components/edit-item'

const ContentList = memo((props) => {
  return (
    <ContentListWrapper>
      <EditItem></EditItem>
      <EditItem></EditItem>
      <EditItem></EditItem>
      <EditItem></EditItem>
    </ContentListWrapper>
  )
})

export default ContentList