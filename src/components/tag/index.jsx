import React, { memo } from 'react'
import {TagWrapper} from "./style"
import rightArrowWhite from '../../assets/images/rightArrowWhite.png'
const Tag = memo((props) => {
  return (
    <TagWrapper>
            <div className="name">
                华语
            </div>
            <div className="arrow">
                <img src={rightArrowWhite} alt="" />
            </div>
    </TagWrapper>
  )
})

export default Tag