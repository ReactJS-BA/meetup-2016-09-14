import { combineReducers } from 'redux';
import user from './userReducer';
import {dashboard} from './dashboardReducer';


 const rootReducer = combineReducers({
   user,
   dashboard
 });

 export default rootReducer;
