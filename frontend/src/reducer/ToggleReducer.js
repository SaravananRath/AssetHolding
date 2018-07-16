// import { normalize, schema } from 'normalizr';
// import update from 'immutability-helper';
const initialState = {
    employee: '',
    hr: '',
    login: '',
    open: false,
    assets: {},
    filterTerm:'',
    countries:[],
    keys:[],
    fetching:false,
    error:false
}
function normalizer(data){
    const obj =data.reduce((a, c) => {
        a[c.id] = c
        return a
    }, {})
    return obj
}

export const reducerFunc = (state=initialState, action) => {
    switch(action.type){
        case 'FETCHING_COUNTRY':
            return{
                ...state,
                fetching:true
            }
        case 'FETCHING_ERROR':
            return{
                ...state,
                error:true
            }
        case 'COUNTRY_DATA':{
            return{...state,fetching:false, error:false,countries:action.data}
        }
        case 'TOGGLE_MODAL':
            return{
                ...state,
                open:!state.open
            }
        case 'ASSET_DATA_CALL': {
            const assetKey = action.data.map(asset => asset.id)
            return {
                ...state,
                assets:normalizer(action.data),
                keys:assetKey
            }
        }

        case 'ADD_ASSET_DATA_CALL_SUCCESS': {
            let newAssets = Object.values(state.assets)
            let newAsset ={
                id:action.data.id,
                name:action.data.name,
                count:action.data.count
            }
            newAssets.push(newAsset)
            return {...state,
                    assets: normalizer(newAssets)
                    }
        }


        case 'UPDATE_ASSET_DATA_SUCCESS': {
            const asset = state.assets[action.id]
            return {...state,
                    assets: {
                        ...state.assets, [action.id]: {
                            ...asset,
                            count: action.payload.count
                        }
                    }
            }
        }

        case 'FILTER_CALL':{

            return {...state,filterTerm:action.data}
        }
        case 'DELETE_ASSET':{
            var _ = require('lodash');
            const key= action.data.id
            return {...state,assets:_.omit(state.assets, key)}
        }
        default:
            return state
    }
}