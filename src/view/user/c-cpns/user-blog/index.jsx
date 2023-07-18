import React, { memo } from 'react'
import {UserBlogWrapper} from "./style"
import noblog from '../../../../assets/images/noblog.png'
const UserBlog = memo((props) => {
  return (
    <UserBlogWrapper>
      <div className="no-blog">
        <img src={noblog} alt="" />
      </div>
      <div className="main">
      暂时还没有博客哦~
      </div>
    </UserBlogWrapper>
  )
})

export default UserBlog