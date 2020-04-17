const VoteChoicesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VOTE_CHOICES":
        console.log('reducer hit with', action.payload);
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
