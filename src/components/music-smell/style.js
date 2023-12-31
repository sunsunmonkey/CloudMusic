import styled from "styled-components";

export const MusicSmellWrapper = styled.div`
   height: 27vw;
   background-image:linear-gradient(to bottom,${props=>props.color},white) ;
   border: 1.5px solid ${props=>props.color};
   border-radius: 2vw;
   width: 26.5vw;
   box-sizing: border-box;
   padding: 1.5vw;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   .top{
      .desc{
         color: #B5B1B9;
         font-size: 3vw;
      }
      .number{
         margin-top: 1.7vw;
         font-size: 4vw;
      }
      
   }
   .bottom{
      margin-bottom: .5vw;
      .bottom-desc{
         font-size: 3px;
         color:#CFD0D4
      }
   }
`