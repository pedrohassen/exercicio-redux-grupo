import { SEND_FORM_PERSONAL } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

function personalForm(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_FORM_PERSONAL:
    return {
      ...state,
      ...action.value,
    };
  default:
    return state;
  }
}

export default personalForm;
