import React, { useState } from 'react';
import useGitHub from '../../hooks/github-hooks';
import * as S from './styled';

const Header = () => {
    const { githubState, getUser } = useGitHub();
    const [usernameForSearch, setusernameForSearch] = useState();

    const submitGetUser = () => {

        if (!usernameForSearch) return;
        getUser(usernameForSearch);

    }

    return (
        <S.WrapperHeader>
            <S.WrapperUser>
                <h1>{githubState.user.name}</h1>
            </S.WrapperUser>
            <S.Wrapper>
                <input type="text" placeholder='Digite o username do GitHub' onChange={(event) => setusernameForSearch(event.target.value)} />
                <button type='submit' onClick={submitGetUser}>
                    Buscar
                </button>
            </S.Wrapper>
        </S.WrapperHeader>
    );
}

export default Header;
