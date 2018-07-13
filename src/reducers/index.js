import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';


export default combineReducers({
    name : sidebarReducer

});
