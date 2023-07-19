import React, { memo, useEffect } from 'react'
import {ContentListWrapper} from "./style"
import EditItem from '../../../../components/edit-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchSelfInfo } from '../../../../store/modules/self-info'
import { fetchalbum } from '../../../../store/modules/album'
import { loginToken } from '../../../../utils/loginToken'
import { handleGender } from '../../../../utils/handleGender'
import qrcode from '../../../../assets/images/qrcode.png'
import { handelData } from '../../../../utils/handleDate'
const ContentList = memo((props) => {
  const dispatch = useDispatch()
  const cookie = loginToken()
  
  const { userId} = useSelector((state)=>({
    userId:state.selfInfo.baseInfo.userId,
  }),shallowEqual)


  useEffect(()=>{
    if(cookie)  dispatch(fetchSelfInfo())
    if(userId) dispatch(fetchalbum(userId))
  },[dispatch,userId,cookie])


  const {profile={}} = useSelector((state)=>({
    profile:state.selfInfo.detailInfo.profile
  }),shallowEqual)
  const {avatarUrl,nickname,gender,birthday  } = profile
  return (
    <ContentListWrapper>
      <div className="top">
      <EditItem desc="头像"><img src={avatarUrl} alt="" className='avator'/></EditItem>
      <EditItem desc="昵称">{nickname}</EditItem>
      <EditItem desc="性别">{handleGender(gender)}</EditItem>
      <EditItem desc="二维码"><img src={qrcode} alt="" /></EditItem>
      </div>
      <div className="center">
      <EditItem desc="生日">{handelData(birthday)}</EditItem>
      <EditItem desc="地区">广东省 深圳市</EditItem>
      <EditItem desc="大学"><span>未填写</span></EditItem>
      <EditItem desc="地区"><span>选择标签</span></EditItem>
      <EditItem desc="地区"><span>还没有简介</span></EditItem>
      </div>
      <div className="bottom">
      <EditItem desc="个人主页设置"></EditItem>
      <EditItem desc="主页模块设置"></EditItem>
      </div>
      <EditItem desc="账号绑定设置" ></EditItem>
    </ContentListWrapper>
  )
})

export default ContentList