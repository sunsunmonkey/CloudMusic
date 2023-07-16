import styled from "styled-components";

export const AvatorWrapper = styled.div`
   margin-left: 20vw;
   display: flex;
   justify-content: center;
   .content{
      position: relative;
      z-index: 19;
      width: 72vw ;
      height: 10vw;
      display: flex;
      justify-content: space-between;
      .avator_contain{
         display: flex;
         justify-content: space-between;
         width: 22vw;
         .avator{
            display: flex;
            align-items: center;
   
              img{
               border-radius: 50%;
               width: 5vw;
              } 
         }
         .img_item{
            display: flex;
            align-items: center;
               img{
                  width: 3vw;
               }
         }
         .name{
            line-height: 10vw;
            font-size: 2.5vw;
         }
      }
      .code{
         display: flex;
         align-items: center;
         margin-top: 1vw;
         img{
            width: 5vw;
         }
      }
   }  


`