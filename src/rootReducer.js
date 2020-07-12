import { combineReducers } from 'redux';
import liveScoreReducer from './comp/reducers/liveScoreReducer';
import predictionReducer from './comp/reducers/predictionReducer';
import roomsReducer from './comp/reducers/roomsReducer';

export default combineReducers({
  liveScore: liveScoreReducer,
  prediction: predictionReducer,
  rooms: roomsReducer
});
