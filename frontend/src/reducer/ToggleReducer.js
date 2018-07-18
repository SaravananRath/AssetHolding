
const initialState = {
    employee: '',
    hr: '',
    login: false,
    open: false,
    assets: {},
    filterTerm:'',
    countries:[],
    keys:[],
    fetching:false,
    error:false,
    errorMessage:'Invalid Username or Password'
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
        case 'LOGIN_ERROR':
            return{
                ...state,
                errorMessage:'Invalid Username or Password'
            }
        case 'DELETE_STATE':
            return{
                login:false
            }
        case 'API_CALL':
            return{
                ...state,login:true,errorMessage:''

            }
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
            // console.log(action.data)
            let newAssets = Object.values(state.assets)
            newAssets=newAssets.concat(action.data)
            // console.log(newAssets)
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