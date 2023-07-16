import styled from "styled-components";
import userBackGround from '../../../../assets/images/userBackGround.jpg'
export const UserAvatorWrapper = styled.div`
   .bc{
    background: url( ${userBackGround} )  no-repeat;
    background-size: cover;
        height: 40vh;
        .main{
            padding: 2vw;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .left{
                img{
                    width: 4vw;
                }
            }
            .right{
                img{
                    width: 4vw;
                }
            }
        }
   }
   .avator-card{
    position: relative;
    top:-3vw;
    margin: 0 auto;
    background-color: white;
    border-radius: 2vw;
    width: 90vw;
    height: 28vw;
    padding-top: 8vw;
    .avator-img{
        top:-8vw;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        img{
            width: 15vw;
            border-radius: 51%;
        }
    }
    .name{
        font-size: 4vw;
        font-weight: 550;
        text-align: center;
    }
   }
`