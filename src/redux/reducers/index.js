import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import setArt from './setArtReducer';
import setVotes from './setVoteReducer';
import voteMode from './voteModeReducer';
import voteChoicesReducer from './voteChoicesReducer';
import voteSubmissionModalReducer from './voteSubmissionModalReducer';
import voteRankDisplayReducer from './voteRankDisplayReducer';
import voteSuccess from './voteSuccess';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const appReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage, invalidEmail
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  setArt,
  setVotes,
  voteMode,
  voteChoicesReducer,
  voteSubmissionModalReducer,
  voteRankDisplayReducer,
  voteSuccess
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
