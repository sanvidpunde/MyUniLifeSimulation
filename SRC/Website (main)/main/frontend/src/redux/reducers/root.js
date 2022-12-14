import { combineReducers } from "redux";
import serverResponse from "./serverResponse_reducer";
import session from "./session_reducer";
import personality from "./personality_reducer";
import career from "./career_reducer";
import course from "./course_reducer";

export default combineReducers({
  session,
  serverResponse,
  personality,
  career,
  course
});