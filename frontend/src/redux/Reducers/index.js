import { combineReducers} from 'redux';
import TimelinesReducer from './timelines';
import UsersReducer from './users';

export default combineReducers({
    TimelinesReducer, UsersReducer
})