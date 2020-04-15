const voteModeReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_VOTE_MODE":
            return true;
        case "CLEAR_VOTE_MODE":
            return false;
        default:
            return state;
    }
};

export default voteModeReducer;