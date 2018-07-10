// import { normalize, schema } from 'normalizr';
import update from 'immutability-helper';
const initialState = {
    employee: '',
    hr: '',
    login: '',
    open: false,
    assets: []
}


export const reducerFunc = (state=initialState, action) => {
    switch(action.type){
        case 'SHOW_HR':
            return{
                hr: "HR_Page"
            }
        case 'SHOW_EMPLOYEE':
            return{
                employee:"Employee_Page"
            }
        case 'SHOW_LOGIN':
            return{
                login:"Login_Page"
            }
        case 'TOGGLE_MODAL':
            return{
                ...state,
                open:!state.open
            }
        case 'ASSET_DATA_CALL':

            return {
                ...state,
                assets: action.assets

            }

        case 'ADD_ASSET_DATA_CALL_SUCCESS': {
            // const newArray = update(state,{$push:action.assets})
            return {...state, assets: state.assets.concat(action.data)}
            // console.log(action.data)
            // return {...state, assets: action.data}

        }
        case 'UPDATE_ASSET_DATA_SUCCESS':{
            const updatedAssets = state.assets.map(a => {
                if(a.id === action.id){
                    return { ...a, ...action.payload }
                }
                return a
            })
            return {
                ...state,assets:updatedAssets
            }
        }

        default:
            return state
    }
}