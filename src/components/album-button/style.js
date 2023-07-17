import styled from "styled-components";

export const AlbumButtonWrapper = styled.div`
    background-color:rgb(255,255,255,0.3);
    width: 29.5vw;
    display: flex;
    justify-content: center;
    padding: 2.4vw 0;
    border-radius: 5vw;
   .button{
    width: 16vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2vw;
    font-weight: 600;
        .number{
            color: white;
        }
        .pic{
            display: flex;
            align-items: center;
            img{
            
            width: 5vw;
        }
        }
      
   }
`