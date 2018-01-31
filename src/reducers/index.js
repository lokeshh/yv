import { combineReducers } from 'redux';
import verseCountLoading from './count';

const rootReducer = combineReducers({
  verseCountLoading: verseCountLoading
});

export default rootReducer;
