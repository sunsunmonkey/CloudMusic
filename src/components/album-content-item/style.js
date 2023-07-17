import styled from "styled-components";

export const AlbumContentItemWrapper = styled.div`
   width: 95vw;
   margin: 0 auto;
   display: flex;


   .left{
    .cover{
        display: flex;
        align-items: center;
        img{
            border-radius: 2vw;
            height: 20vw;
            width: 20vw;
            object-fit: cover;
        }
    }
   }
   .right{
    margin-left: 2vw;
    .title{
        font-size: 3.7vw;
        color: white;
        width: 65vw;
        margin-bottom: 1vw;
    }
    .creator{
        display: flex;
        align-items: center;
        .avator{
            display: flex;
            align-items: center;
            img{
                border-radius: 50%;
                width: 4.2vw;
                height: 4.2vw;
            }
        }
        .name{
            font-size: 1.7vw; 
            margin-left: 2vw;
            color:rgb(233 229 229);
        }
        .sub{
            display: flex;
            align-items: center;
            background:rgba(255,255,255,0.3);
            border-radius: 2vw;
            padding: 0 .7vw;
            margin-left: 1.5vw;
            .jia{
                display: flex;
                align-items: center;
                padding-top: 0.4vw;
                img{
                    width: 2.7vw;
                 }   
            }
            .desc{
                color: white;
                display: flex;
                align-items: center;
                transform: scale(0.8,0.8);
                font-size: .2vw; 
            }
           
        }
    }
    height: 20vw;
   }
   .tag-list{
    display: flex;
    margin: 1vw 0;
   }
`