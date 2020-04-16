const voteSubmissionModalReducer = (state = false, action) => {
  switch (action.type) {
    case "VOTE_SUBMISSION_MODAL_OPEN":
      return true;
    case "VOTE_SUBMISSION_MODAL_CLOSE":
      return false;
    default:
      return state;
  }
};

export default voteSubmissionModalReducer;
