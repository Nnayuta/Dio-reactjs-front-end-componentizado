import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
    const {
        githubState,
        getUser,
        getUserRepos,
        getUserStared } = useContext(GithubContext);

    return {
        githubState,
        getUser,
        getUserRepos,
        getUserStared
    };
}

export default useGithub;