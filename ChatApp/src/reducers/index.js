import {combineReducers} from 'redux';

import chatroom from './chatroom';
import user from './user';
import DeviceInfo from 'react-native-device-info';

const rootReducer = combineReducers({
  chatroom,
  user,
});

export default rootReducer;
