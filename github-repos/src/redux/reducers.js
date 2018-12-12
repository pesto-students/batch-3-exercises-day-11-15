import { loadRepos, reposReturned } from './actions';

const initialState = {
  repos: [],
  user: 'shikhardb',
};

export default function reposReducer(state = initialState.repos, action) {
  switch (action.type) {
    case types.GOT_REPOS: {
      return action.repos;
    }
    default:
      return state;
  }
}
