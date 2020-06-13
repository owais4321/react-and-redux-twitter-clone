import {combineReducers} from 'redux';
import authedUser from './autheduser';
import users from './users';
import tweets from './tweets';
import {loadingBarReducer} from 'react-redux-loading'
export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar:loadingBarReducer
});