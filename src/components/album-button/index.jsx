import React, { memo } from 'react'
import { AlbumButtonWrapper } from "./style"
import commend from '../../assets/images/commend.png'
const AlbumButton = memo((props) => {
    return (
        <AlbumButtonWrapper>
            <div className="button">
                <div className="pic">
                    <img src={commend} alt="" />
                </div>
                <div className="number">
                    25555
                </div>
            </div>

        </AlbumButtonWrapper>
    )
})

export default AlbumButton