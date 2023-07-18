import styled from "styled-components";

export const EditItemWrapper = styled.div`
    background-color: white;
  
   .main{
    width: 90vw;
    margin: 0 auto;
    border-bottom: 1px solid rgb(240,240,230);
    display: flex;
    justify-content: space-between;
    padding: 3vw 0;
    .right{
        color:rgb(156,156,156);
        font-size: 3.5vw;
        .avator{
            width: 10vw;
            border-radius: 50%;
        }
        img{
            width: 5vw;
        }
        span{
            color:rgb(210 206 206) ;
        }
    }
    .left{
        font-size: 3.5vw;
        display: flex;
        align-items: center;
    }
   }
`