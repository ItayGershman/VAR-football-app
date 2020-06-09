import { combineReducers } from 'redux';
import liveScoreReducer from './comp/reducers/liveScoreReducer'
import predictionReducer from './comp/reducers/predictionReducer'

export default combineReducers({
  liveScore: liveScoreReducer,
  prediction:predictionReducer
});
