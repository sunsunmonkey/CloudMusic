import styled from "styled-components";

export const ListBarWrapper = styled.div`
    background-color: white;
    width: 72vw;
    margin: 0 auto;
    border-radius: 2vw;
    margin-bottom: 5vw;
    .item{
        width: 70vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 8vw;
        padding: 1vw;
      .left{
        display: flex;
        align-items: center;
        .img_item{
            display: flex;
            align-items: center;
            margin-left: 2vw;
            margin-right: 2.2vw;
            img{
                width: 3.5vw;
            }
        }
        .desc{  
            font-size: 2.5vw;

        }
      }
      .right{
        display: flex;
        align-items: center;
        padding: 4vw;
        .img_item{
            img{
                width: 2.5vw;
            }
        }
      }
    }
 
`