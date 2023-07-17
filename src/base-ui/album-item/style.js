import styled from "styled-components";

export const AlbumItemWrapper = styled.div`
    display: flex;
    margin-top: 1vw;
    .left{
        img{
            width: 10vw;
            height: 10vw;
            border-radius: 1vw;
            object-fit: cover;
        }
    }
    .right{
        height: 10vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2vw;
        .title{
            font-size: 3.6vw;
            width: 65vw;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .desc{
            margin-top: .3vw;
            font-size: 2vw;
            color: rgb(142,142,142);
        }
    }   
    .more{
        display: flex;
        align-items: center;
        img{
            width: 4.7vw;
        }
    }
`