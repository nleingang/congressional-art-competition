const VoteChoicesReducer = (state = {
    firstPlace: '',
    secondPlace: '',
    thirdPlace: ''
}, action) => {
  switch (action.type) {
    case "SET_VOTE_CHOICES":
      return action.payload;
    case "CHECK_VOTE_CHOICES":
        return state;
    case "CLEAR_VOTE_CHOICES":
      return [];
    default:
      return state;
  }
};

export default VoteChoicesReducer;
