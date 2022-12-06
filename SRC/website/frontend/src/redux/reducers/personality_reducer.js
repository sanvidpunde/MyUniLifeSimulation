import {RECEIVE_CURRENT_PERSONALITY, UPDATE_CURRENT_PERSONALITY} from '../util/controller';

const _nullSession = { personality: "", description: "", characteristics_of_personality: [], common_traits: [], effects_of_personality: "", what_can_be_improved: [], word_of_advice: "" }
const personality = (state = _nullSession, { type, personality }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_PERSONALITY:
    	return personality;
	case UPDATE_CURRENT_PERSONALITY:
    	return personality;
    default:
    	return state;
  }
};

export default personality;