import { SEND_FORM_PERSONAL, SEND_FORM_PROFESSIONAL } from './actionTypes';
import store from '..';

export const actionSendFormPersonal = (value) => (
  store.dispatch({ type: SEND_FORM_PERSONAL, value })
);

export const actionSendFormProfessional = (value) => (
  store.dispatch({ type: SEND_FORM_PROFESSIONAL, value })
);
