const VoteChoicesReducer = (state = {
    firstPlace: '',
    secondPlace: '',
    thirdPlace: ''
}, action) => {
  switch (action.type) {
    case "SET_VOTE_CHOICES":
      return action.payload;
    case "CLEAR_VOTE_CHOICES":
      return [];
    default:
      return state;
  }
};

export default VoteChoicesReducer;
