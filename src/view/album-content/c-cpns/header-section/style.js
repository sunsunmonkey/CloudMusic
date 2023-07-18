import styled from "styled-components";
export const HeaderSectionWrapper = styled.div`
   .top{
    position: fixed;
    z-index: 999;

    width: 95vw;
    margin:3vw auto ;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    .left{
        width: 18vw;
        justify-content: space-between;
        display: flex;
        .title{
            color: white;
            display: flex;
            align-items: center;
        }
        .back{
            display: flex;
            align-items: center;
        }
    }
    .right{
        width: 15vw;
        justify-content: space-between;
        display: flex;
        .search{
            display: flex;
            align-items: center;
        }
        .more{
            display: flex;
            align-items: center;
        }
    }
    img{
        object-fit: cover;
        width: 6vw;
    }
    .img-cover{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0;
        background: url(${props=>props.coverimgurl}) no-repeat ; 
        background-size: cover;
        z-index: -9;
        filter: blur(4vw);
    }
   }
   .main{
    padding-top: 20vw;
    position: relative;
    >.cover{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0;
        background: url(${props=>props.coverimgurl})  no-repeat ; 
        background-size: cover;
        z-index: -9;
        filter: blur(4vw);
    }
    .album-desc{
        
        width: 95vw;
        margin: 3vw auto;
        display: flex;
        align-items: center;
        .word{
        color:rgb(225 231 231);
        font-size: 1px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }
        >.arrow{
            display: flex;
            align-items: center;
            img{
                width: 3vw;
            }
        }   
        
    }
    .button-list{
        width: 95vw;
        margin: 3.5vw auto;
        display: flex;
        justify-content: space-between;
    }
   }
 
`