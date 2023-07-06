import React, { memo } from 'react'
import {HomeWrapper} from "./style"
import { shallowEqual, useSelector } from 'react-redux'


const Home = memo((props) => {
  const {selfInfo} = useSelector((state)=>({
    selfInfo: state.selfInfo.selfInfo
  }),shallowEqual)
  console.log(selfInfo);
  return (
    <HomeWrapper>

      222
    </HomeWrapper>
  )
})

export default Home