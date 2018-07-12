// import { normalize, schema } from 'normalizr';
// import update from 'immutability-helper';
const initialState = {
    employee: '',
    hr: '',
    login: '',
    open: false,
    assets: [],
    filterTerm:''
}


export const reducerFunc = (state=initialState, action) => {
    switch(action.type){

        case 'TOGGLE_MODAL':
            return{
                ...state,
                open:!state.open
            }
        case 'ASSET_DATA_CALL':

            return {
                ...state,
                assets: action.assets,
            }

        case 'ADD_ASSET_DATA_CALL_SUCCESS': {
            let newAssets = state.assets.slice();
            return {...state, assets: newAssets.concat(action.data)}


        }
        case 'UPDATE_ASSET_DATA_SUCCESS': {
            let newAssets = state.assets.slice();

            const updatedAssets = newAssets.map(_asset => {
                if (_asset.id === action.id) {
                    return {..._asset, ...action.payload}
                }
                // console.log(_asset)
                return _asset
            })

            return {
                ...state, assets: updatedAssets
            }
        }

        case 'FILTER_CALL':{

            return {...state,filterTerm:action.data}
        }

        default:
            return state
    }
}