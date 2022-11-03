import {RECEIVE_CURRENT_STEP, UPDATE_CURRENT_STEP} from '../util/controller';

const _nullSession = { step1: null, step2: null, step3: null, step4: null, step5: null, step6: null, step7: null, step8: null, step9: null, step10: null }
const step = (state = _nullSession, { type, step }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_STEP:
    	return step;
	case UPDATE_CURRENT_STEP:
    	return step;
    default:
    	return state;
  }
};

export default step;