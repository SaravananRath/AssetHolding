import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import {reducerFunc}  from './ToggleReducer'
import { sessionReducer } from 'redux-react-session';


const rootReducer = combineReducers({
    toggle_reducer:reducerFunc,
    form: formReducer,
    session:sessionReducer
})


export default rootReducer