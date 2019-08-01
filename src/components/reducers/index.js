import {combineReducers} from "redux";
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import characterReducer from './characterReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    characters: characterReducer,
    games: gameReducer
});

