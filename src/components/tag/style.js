import styled from "styled-components";

export const TagWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background:rgba(255,255,255,0.5);
    margin-right: 1.7vw;
    border-radius: 1vw;
   .name{
    padding-left:0.2vw ;
    display: flex;
    align-items: center;
    transform: scale(0.8,0.8);
    font-size: 1px;
    font-weight: bold;
    color: white;
   }
   .arrow{
    display: flex;
    align-items: center;
    padding-top: 0.3vw;
    img{
        width: 2.7vw;
    }
   }
`