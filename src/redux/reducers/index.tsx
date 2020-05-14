import { combineReducers } from 'redux';
import yesOrNo from './yes-or-no';
import target from './target';
import statistics from './statistics';

export default combineReducers({ yesOrNo, target, statistics });