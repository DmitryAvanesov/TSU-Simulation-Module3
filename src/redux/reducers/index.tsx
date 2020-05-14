import { combineReducers } from 'redux';
import yesOrNo from './yes-or-no';
import target from './target';

export default combineReducers({ yesOrNo, target });