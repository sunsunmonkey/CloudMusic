import React, { memo } from 'react'
import {LogOutWrapper} from "./style"
import { useDispatch } from 'react-redux'
import { changeDetailInfoAction, changeSelfInfoAction } from '../../store/modules/self-info'

const LogOut = memo((props) => {
    const dispatch = useDispatch()
    
    function handleClick(){
        localStorage.removeItem('cookie')
        dispatch(changeSelfInfoAction({ nickname:"未登录",}))
        dispatch(changeDetailInfoAction({ profile:{} }))
    }
  return (
    <LogOutWrapper>
      <div className="text" onClick={handleClick}>
       退出登录
      </div>
    </LogOutWrapper>
  )
})

export default LogOut