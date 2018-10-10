const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "Login":
      return {
        uid: action.uid
      };
    case "Logout":
      return {};
    default:
      return state;
  }
};
export default authReducer;
