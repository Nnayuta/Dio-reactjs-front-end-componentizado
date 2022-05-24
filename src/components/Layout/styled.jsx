import styled from "styled-components";

export const WapperLayout = styled.section`
    display: flex;
    flex-direction: column;

`;

export const WarrperProfile = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;
