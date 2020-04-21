const voteSuccess = (state = false, action) => {
  switch (action.type) {
    case "VOTE_SUCCESS":
      return true;
    case "VOTE_FAILURE":
      return false;
    default:
      return state;
  }
};

export default voteSuccess;