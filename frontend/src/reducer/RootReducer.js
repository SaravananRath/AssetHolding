import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import {reducerFunc}  from './ToggleReducer'


const rootReducer = combineReducers({
    toggle_reducer:reducerFunc,
    form: formReducer
})


export default rootReducer