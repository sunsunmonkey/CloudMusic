import styled from "styled-components";

export const AvatorWrapper = styled.div`
   margin-left: 20vw;
   display: flex;
   justify-content: center;
   .content{
      position: relative;
      top: 1vw;
      z-index: 19;
      width: 72vw ;
      height: 10vw;
      display: flex;
      justify-content: space-between;
      .avator_contain{
         display: flex;
         justify-content: space-between;
         width: 34vw;
         .avator{
            display: flex;
            align-items: center;
   
              img{
               border-radius: 50%;
               width: 6vw;
              } 
         }
         .img_item{
            display: flex;
            align-items: center;
               img{
                  width: 4vw;
               }
         }
         .name{
            line-height: 10vw;
            font-size: 3vw;
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