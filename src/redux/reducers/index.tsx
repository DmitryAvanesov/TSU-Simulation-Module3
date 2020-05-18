import { combineReducers } from 'redux';
import yesOrNo from './yes-or-no';
import target from './target';
import statistics from './statistics';
import dice from './dice';
import football from './football';

export default combineReducers({ yesOrNo, target, statistics, dice, football });