const setVoteReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_VOTES":
            return action.payload;
        case "CLEAR_VOTES":
            return [];
        case "LOGOUT":
            return [];
        default:
            return state;
    }
};

export default setVoteReducer;