import styled from 'styled-components';

export const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.466);
    margin-bottom: 20px;
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const WrapperUser = styled.div`
    margin-left: 20px;

    h1{
        font-family: 'Rammetto One', cursive;
        text-transform: uppercase;
        color: #fff;
        font-size: 30px;
        justify-content: flex-start;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        width: 100%;
        min-height: 38px;
        max-width: 500px;
        min-width: 400px;
        text-indent: 15px;
        font-size: 14px;
        background-color: #fff;
    }

    input:focus{
        outline: none;
    }

    button{
        margin-left: 10px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 100px;
        min-width: 80px;
        min-height: 38px;
        background-color: #6cc644;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover{
        box-shadow: 0px 0px 3px #6cc644;
    }

    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;