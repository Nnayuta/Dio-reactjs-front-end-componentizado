import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 49%;
    height: 100%;
    flex-direction: column;
    margin-bottom: 5px;


    a{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 16px;
        background-color: #fafafa;
        color: #333;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid #333;
    }

    h2{
        
    }

    span{
        margin-left: 5px;
    }
    
    a:hover{
        background-color: #f5f5f5;
    }

    div{
        display: flex;
    }

    @media (max-width: 800px) {
        width: 100%;
        
    }

`;