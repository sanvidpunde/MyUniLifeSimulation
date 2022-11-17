import { combineReducers } from "redux";
import serverResponse from "./serverResponse_reducer";
import session from "./session_reducer";
import step from "./step_reducer";
import career from "./career_reducer";

export default combineReducers({
  session,
  serverResponse,
  step,
  career
});