import * as types from './actions';

function loadReposDone(repos) {
  return {
    type: types.LOAD_REPOS,
    repos,
  };
}

function loadRepos(user) {
  return dispatch =>
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((repos) => {
        dispatch(loadReposSuccess(repos.data));
      })
      .catch((err) => {
        throw err;
      });
}

export { loadReposDone, loadRepos };
