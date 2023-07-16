import React, { memo } from 'react'
import {EditItemWrapper} from "./style"

const EditItem = memo((props) => {
  return (
    <EditItemWrapper>
        <div className="main">
        <div className="left">头像</div>
        <div className="right">6博一</div>
        </div>
   
    </EditItemWrapper>
  )
})

export default EditItem