import React, { memo } from 'react'
import {EditItemWrapper} from "./style"

const EditItem = memo((props) => {
  const {desc} = props
  return (
    <EditItemWrapper>
        <div className="main">
        <div className="left">{desc}</div>
        <div className="right">{props.children}</div>
        </div>
   
    </EditItemWrapper>
  )
})

export default EditItem