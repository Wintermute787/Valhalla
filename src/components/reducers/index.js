import {combineReducers} from "redux";
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import characterReducer from './characterReducer'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    characters: characterReducer
});

