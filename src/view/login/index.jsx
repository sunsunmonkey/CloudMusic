import React, { memo, useEffect, useState } from 'react'
import {LoginWrapper} from "./style"
import { Link, useNavigate } from 'react-router-dom'
import cha from '../../assets/images/cha.png'
import { login } from '../../services/modules/login'
const Login = memo((props) => {
    const [src,setSrc] = useState(' ')
    const navigate = useNavigate()
    useEffect(()=>{
      login(setSrc,navigate)
    },[navigate])


  return (
    <LoginWrapper>
      <div className="exit">
      <Link to="/home">
          <img src={cha} className='cha' alt='nothing'/>
        </Link>
      </div>
      <div className="main">
      <div className="title">扫码登录
      </div>
      <img src={src}
      alt='nothing'></img>
      <div className="desc">
        使用<a 
        href='https://music.163.com/#/download'
        >网易云音乐App</a>
        扫码登录

      </div>
      </div>
   
    </LoginWrapper>
  )
})

export default Login