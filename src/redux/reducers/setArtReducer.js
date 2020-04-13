const setArtReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_ART":
      return action.payload;
    case "CLEAR_ART":
      return [];
    case "LOGOUT":
      return [];
    default:
      return state;
  }
};

export default setArtReducer;
