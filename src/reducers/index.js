import { combineReducers } from "redux";
import authedUser from "./AuthedUserReducer";
import users from "./UsersReducer";
import tweets from "./TweetsReducer";

export default combineReducers({
  authedUser,
  users,
  tweets,
});
