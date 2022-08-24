import { SEND_FORM_PROFESSIONAL } from '../actions/actionTypes';

const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

function professionalForm(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_FORM_PROFESSIONAL:
    return {
      ...state,
      ...action.value,
    };
  default:
    return state;
  }
}

export default professionalForm;
