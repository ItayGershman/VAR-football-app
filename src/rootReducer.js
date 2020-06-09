import { combineReducers } from 'redux';
import liveScoreReducer from './comp/reducers/liveScoreReducer'

export default combineReducers({
  liveScore: liveScoreReducer
});
