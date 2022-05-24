import React from 'react';
import * as S from './styled';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        <S.Wrapper>
            <a href={linkToRepo}
                target={"_blank"}
                rel="noreferrer">
                <div>
                    <h2>Name:</h2>
                    <span>{name}</span>
                </div>
                <div>
                    <h2>Full Name: </h2>
                    <span>{fullName}</span>
                </div>
            </a>
        </S.Wrapper>
    );
}

export default RepositoryItem;
