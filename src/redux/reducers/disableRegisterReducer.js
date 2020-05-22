const disableRegister = (state = "false", action) => {
  switch (action.type) {
    case "DISABLE_REGISTER":
      return "true";
    case "ENABLE_REGISTER":
      return "false";
    default:
      return state;
  }
};


export default disableRegister;
