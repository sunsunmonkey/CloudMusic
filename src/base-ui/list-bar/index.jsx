import React, { memo } from 'react'
import { ListBarWrapper } from "./style"
import code from '../../assets/images/code.png'
import rightArrow from '../../assets/images/rightArrow.png'
const ListBar = memo((props) => {
    const message = ['我的音乐', "云被中兴", "创作中心",'sss']
    return (
        <ListBarWrapper>
            {
                message.map((item) => {
                    return (
                        <div className="item" key={item}>
                            <div className="left">
                                <div className="img_item">
                                    <img src={code} alt="" />
                                </div>
                                <div className="desc">{item}</div>
                            </div>
                            <div className="right">
                            <div className="img_item">
                                    <img src={rightArrow} alt="" />
                                </div>
                            </div>
                        </div>

                    )


                })
            }

        </ListBarWrapper>
    )
})

export default ListBar