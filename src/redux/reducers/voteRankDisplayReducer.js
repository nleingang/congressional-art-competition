const VoteRankDisplayReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VOTE_RANKS":
        console.log('reducer hit with', action.payload);
      return action.payload;
    case "CHECK_VOTE_RANKS":
        return state;
    case "CLEAR_VOTE_RANKS":
      return [];
    default:
      return state;
  }
};

export default VoteRankDisplayReducer;