import React, { memo } from 'react'
import {TagWrapper} from "./style"
import rightArrowWhite from '../../assets/images/rightArrowWhite.png'
const Tag = memo(({item}) => {
  return (
    <TagWrapper>
            <div className="name">
                {item}
            </div>
            <div className="arrow">
                <img src={rightArrowWhite} alt="" />
            </div>
    </TagWrapper>
  )
})

export default Tag