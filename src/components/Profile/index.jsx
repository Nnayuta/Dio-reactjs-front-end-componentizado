import React from 'react';
import useGitHub from '../../hooks/github-hooks';
import * as S from './styled';

//b39d529fd7561058395641b7c21c8fdccb1f6797
const Profile = () => {

    const { githubState } = useGitHub();

    return (
        <S.Wrapper>
            <S.WrapperImageAndStatus>
                <S.WrapperImage src={githubState.user.avatar} alt="Avatar of User" />
                <S.WrapperStatusCount>
                    <div>
                        <img src='./icons/usuarios-alt.svg' alt="Followers" />
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <img src='./icons/seguindo.svg' alt="Following" />
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <img src='./icons/pasta.svg' alt="Repos" />
                        <span>{githubState.user.public_repos}</span>
                    </div>
                    <div>
                        <img src='./icons/legendas.svg' alt="Gists" />
                        <span>{githubState.user.public_gists}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperImageAndStatus>
            <S.WrapperInfoUser>
                <div>
                    <S.WrapperGeneric>
                        <h3>Username:</h3>
                        <a
                            href={githubState.user.html_url}
                            target={"_blank"}
                            rel="noreferrer">{githubState.user.login}
                        </a>
                    </S.WrapperGeneric>
                    <S.WrapperGeneric>
                        <h3>Company:</h3>
                        <p>{githubState.user.company}</p>
                    </S.WrapperGeneric>
                    <S.WrapperGeneric>
                        <h3>Blog:</h3>
                        <a
                            href={githubState.user.blog}
                            target={"_blank"}
                            rel="noreferrer">{githubState.user.blog}
                        </a>
                    </S.WrapperGeneric>
                    <S.WrapperGeneric>
                        <h3>Location:</h3>
                        <p>{githubState.user.location}</p>
                    </S.WrapperGeneric>
                </div>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;
