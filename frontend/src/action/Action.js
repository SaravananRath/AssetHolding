import axios from 'axios'
import { push } from 'react-router-redux'
import {
    ADD_ASSET_DATA_URL,
    AUTH_USER_URL,
    DELETE_ASSET_DATA_URL,
    GET_ASSET_DATA_URL,
    GET_COUNTRY_URL,
    UPDATE_ASSET_DATA_URL
} from "../const";

export function hr() {
    return{
        type:'SHOW_HR'
    }
}

export function employee(){
    return{
        type:'SHOW_EMPLOYEE'
    }
}
export function updateAssetDataCall(data){
    console.log(data)
    return(dispatch) =>{
        axios({
            method:'patch',
            headers: {Authorization:localStorage.getItem('auth_token')},
            url:UPDATE_ASSET_DATA_URL,
            data:{
                'company_asset_params' : [data]
            }
        })
            .then(response =>{
                console.log(response)
                dispatch(updateAssetDataCallSuccess(data))
            })
            .catch(function(error){
                console.log(error)
            })
    }
}

export function updateAssetDataCallSuccess(data){
    return{
        type:'UPDATE_ASSET_DATA_SUCCESS',
        id:data.id,
        payload: {count: data.count}
    }
}
export function addAssetDataCall(data){
    console.log(data)
    return(dispatch) => {
        axios({
            method: 'post',
            headers:{Authorization: localStorage.getItem('auth_token')},
            url: ADD_ASSET_DATA_URL,
            data: {
                'company_asset_params': data
            }
        })
            .then(response =>{
                // console.log(response.data.company_assets)
                // dispatch(addAssetDetailCallSuccess(response.data.company_assets))
                dispatch(addAssetDetailCallSuccess(response.data.company_assets[0]))
            })
            .catch(function(error){
                console.log(error)
            })
    }
}

export function addAssetDetailCallSuccess(data){
    return {
        type: 'ADD_ASSET_DATA_CALL_SUCCESS',
        data
    }
}
export function assetDataCall(){
    return(dispatch) => {
    axios.get(GET_ASSET_DATA_URL,{
        headers:{
            Authorization: localStorage.getItem('auth_token')
        }
    })
        .then(response =>{
            // console.log(response.data.assets)
            return(
                dispatch(assetDataCallSuccess(response.data.assets))
            )
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export function assetDataCallSuccess(data){
    return{
        type: 'ASSET_DATA_CALL',
        data
    }
}

export function pushToHome(){
    return(dispatch) => {
        dispatch(push('/'))
    }
}
export function apiCall(user){
    return(dispatch) => {
        axios.post(AUTH_USER_URL,
            {
                    email: user.email,
                    password: user.password
            })
            .then(response => {
                console.log(response.data);
                localStorage.setItem('auth_token',response.data.access_token)
                localStorage.setItem('user_type',response.data.user_type)
                if(response.data.user_type==='HR') {
                    dispatch(push('hr'))
                }
                else if(response.data.user_type==='EMPLOYEE'){
                    dispatch(push('employee'))

                }
                else{
                    dispatch(push('/'))
                }

                return (dispatch(apiSuccess(response.data.results)))
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}

export function deleteAsset(data){
    // console.log(data)
    return(dispatch) => {
        axios({
            method: 'DELETE',
            headers:{Authorization: localStorage.getItem('auth_token')},
            url: DELETE_ASSET_DATA_URL,
            data: {
                'company_asset_params': [data]
            }
        })
            .then(response=>{
                console.log(response.data)
                dispatch(deleteAssetSuccess(data))
            })
            .catch(function (error){
                console.log(error)
            })
    }
}

export function deleteAssetSuccess(data){
    return{
        type:'DELETE_ASSET',
        data
    }
}


export function getCountry(data){
    return(dispatch) => {
        dispatch(fetchingCountry())
        axios.get(GET_COUNTRY_URL+data)
            .then(response=>{
                console.log(response)
                dispatch(getCountrySuccess(response.data))
            })
            .catch(function(error){
                console.log(error)
                dispatch(fetchingError())

            })
    }
}
export function getCountrySuccess(data){
    return{
        type:'COUNTRY_DATA',
        data
    }
}

export function fetchingCountry(){
    return {
        type: 'FETCHING_COUNTRY'
    }
}
export function fetchingError(){
    return {
        type: 'FETCHING_ERROR'
    }
}


export function filterData(data){
    return{
        type:'FILTER_CALL',
        data
    }
}

export function apiSuccess(){
    return{
        type:'API_CALL'
    }
}

export function toggleModal(){
    return{
        type:'TOGGLE_MODAL'
    }
}