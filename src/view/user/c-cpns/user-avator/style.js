import styled from "styled-components";
export const UserAvatorWrapper = styled.div`
   .bc{
    background: url( ${props=>props.backgroundurl} )  no-repeat;
    background-size: cover;
        height: 35vh;
        .main{
            padding: 2vw;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .left{
                img{
                    width: 5vw;
                }
            }
            .right{
                img{
                    width: 5vw;
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
    height: 30vw;
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
    .static{
        display: flex;
        justify-content: center;
        .container{
            display: flex;
            justify-content: space-between;
        }
        .level,.fans,.sub {
            height: 5vw;
            line-height: 5vw;
            padding: 0 2vw;
            text-align: center;
            font-size: 3vw;
            color: rgb(163,166,175);
            border-left: 1px solid rgb(235,235,235);
        }
        .sub{
            border-left:1px;
        }
    }
     .label{
        display: flex;
        width: 77vw;
        margin: 0 auto;
        margin-top: 2vw;
        justify-content: space-between;
        .item{
            border-radius: 6px;
            font-size: 1px;
            border: 1px solid rgb(238,238,238);
            padding: 0.7vw 1.6vw;
        }
     } 
     .edit{
        display: flex;
        justify-content:center ;
        margin-top: 2vw;
        .wrapper{
            font-size: 3.2vw; 
            font-weight:600;
            padding: 1.2vw;
            padding-left: 4vw;
            padding-right: 4vw;
            border-radius: 18px;
            border: 1px solid rgb(238,238,238);
        }


     }
   }
 
`