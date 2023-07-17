import styled from "styled-components";

export const SongItemWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 95vw;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 4vw;
    height: 10vw;
    justify-content: space-between;
    .left{
    display: flex;
    align-items: center;
    .num{
    width: 5vw;
    margin-right: 2.5vw;
    text-align: center;
    color: rgb(222,222,222);
   }
   .center{
    display: flex;
    flex-direction: column;
    height: 10vw;
    justify-content: space-around;
    .title{
        font-size: 3.7vw;
    }
    .active{
        color: red;
    }
    .artist{
        width: 80vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: .5vw;
        font-size: 2.5vw;
        color: rgb(184 183 183);
    }
   }
    }
  
   .more{
    display: flex;
    align-items: center;
    img{
        width: 5vw;
    }
   }
`