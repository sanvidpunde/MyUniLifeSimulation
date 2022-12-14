import {RECEIVE_CURRENT_CAREER, UPDATE_CURRENT_CAREER} from '../util/controller';

const _nullSession = { career: "", job_role: "", job_description: "", duties: [], employers: [], skills_required: [] }
const career = (state = _nullSession, { type, career }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_CAREER:
    	return career;
	case UPDATE_CURRENT_CAREER:
    	return career;
    default:
    	return state;
  }
};

export default career;