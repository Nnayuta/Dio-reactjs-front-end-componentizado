import React from 'react';
import useGithub from '../../hooks/github-hooks';
import Header from '../Header';
import * as S from './styled'

const Layout = ({ children }) => {

    const { githubState } = useGithub();

    return (
        <S.WapperLayout>
            <Header />
            <S.WarrperProfile>
                {githubState.loading ? <p>Loading</p> : <>{children}</>}
            </S.WarrperProfile>
        </S.WapperLayout>
    );
}

export default Layout;
