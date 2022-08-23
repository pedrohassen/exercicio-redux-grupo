import { combineReducers } from 'redux';
import personalForm from './personalFormReducer';
import professionalForm from './professionalFormReducer';

const rootReducer = combineReducers({ personalForm, professionalForm });

export default rootReducer;
