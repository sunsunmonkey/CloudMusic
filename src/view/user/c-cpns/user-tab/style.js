import styled from "styled-components";

export const UserTabWrapper = styled.div`
    width: 90vw;
    margin: 3vw auto;
  .tab-list{
   width: 55vw;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   .item{
        position: relative;
        font-weight: 600;
        color: #A2A6AF;
   } 
   .active{
        color:black;
   }
   .active::after{
      content:"";
      position: absolute;
      width: 3.6vw;
      height: 0.8vw;
      border-radius: 1vw;
      background-color: red;
      bottom: -1.5vw;
      left: 50%;
      transform: translateX(-50%);
   }
  }
`