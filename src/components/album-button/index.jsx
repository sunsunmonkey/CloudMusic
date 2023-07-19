import React, { memo } from 'react'
import { AlbumButtonWrapper } from "./style"
import commend from '../../assets/images/commend.png'
const AlbumButton = memo(({count,src}) => {
    return (
        <AlbumButtonWrapper>
            <div className="button">
                <div className="pic">
                    <img src={src} alt="" />
                </div>
                <div className="number">
                    {count}
                </div>
            </div>

        </AlbumButtonWrapper>
    )
})

export default AlbumButton