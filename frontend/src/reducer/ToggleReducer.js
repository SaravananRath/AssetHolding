// import { normalize, schema } from 'normalizr';
// import update from 'immutability-helper';
const initialState = {
    employee: '',
    hr: '',
    login: '',
    open: false,
    assets: {},
    filterTerm:'',
    countries:[]
}


export const reducerFunc = (state=initialState, action) => {
    switch(action.type){

        case 'TOGGLE_MODAL':
            return{
                ...state,
                open:!state.open
            }
        case 'ASSET_DATA_CALL': {
            const obj = action.data.reduce((a, c) => {
                a[c.id] = c
                return a
            }, {})
            // const assetKey = action.assets.map(asset => asset.id)
            console.log(obj)
            // console.log(assetKey)

            return {
                ...state,
                // ... obj,
                assets:obj
            }
        }

        case 'ADD_ASSET_DATA_CALL_SUCCESS': {
            let newAssets = state.assets.slice();
            return {...state, assets: newAssets.concat(action.data)}


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

        case 'COUNTRY_DATA':{
            return{...state,countries:action.data}
        }

        default:
            return state
    }
}