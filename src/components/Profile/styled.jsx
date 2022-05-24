import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 600px;
    height: 100%;
    margin-left: 20px;
    border-radius: 8px;
    background-color: #fafafa;
    padding: 10px;
    align-items: center;
`;

export const WrapperImageAndStatus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: 8px;

    h1{
        font-size: 32px;
        font-weight: bold;
    }

    h3{
        font-size: 18px;
        font-weight: bold;
    }

    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 15px;
    }

    span{
        font-size: 15px;
        font-weight: bold;
        margin-left: 8px;
    }

    div{
        display: flex;
        padding: 8px;
        text-align: center;
    }

    div:hover{
        cursor: pointer;
        background-color: #f5f5f5;
    }
`;

export const WrapperGeneric = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 5px;


    h3{
        margin-right: 8px;
    }

    a{
        font-size: 18px;
        color: #1123cc;
        font-weight: bold;
    }

    p{
        font-size: 16px;
        font-weight: bold;
    }
`;


export const WrapperImage = styled.img`
    border-radius: 20%;
    width: 200px;
    margin: 8px;
`;
