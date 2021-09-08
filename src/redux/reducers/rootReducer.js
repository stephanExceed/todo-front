import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import UIreducer from './UIreducer';


export const rootReducer = combineReducers({
    UI: UIreducer,
    tasks: tasksReducer
})