import styled from "styled-components";

export const ListSectionWrapper = styled.div`
    background-color: white;
    border-radius: 3vw;
 
   .play-all{
    width: 95vw;
    margin: 0 auto;
    padding:3vw ;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .desc{
        font-size: 3.5vw;
        margin-left: 2vw;
        margin-right: 2vw;
        font-weight: 600;
    }
    .num{
        font-size: 3vw;
        color:rgb(164,164,164);
    }
    .play-img{
        display: flex;
        align-items: center;
        img{
        width: 4.5vw;
        }
    }
 
   }
   .song-list{
    max-height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
    display: none;
    }
   }
`