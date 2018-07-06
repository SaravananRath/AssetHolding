import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'
import history from '../component/history'


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

export function assetDataCall(){
    return(dispatch) => {
    axios.get('http://localhost:3001/api/hr/dashboard',{
        headers:{
            Authorization: localStorage.getItem('auth_token')
        }
    })
        .then(response =>{
            console.log(response.data.assets)
            return(
                dispatch(assetDataCallSuccess(response.data.assets))
            )
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export function assetDataCallSuccess(assets){
    return{
        type: 'ASSET_DATA_CALL',
        assets
    }
}
export function apiCall(user){
    return(dispatch) => {
        axios.post('http://localhost:3001/auth_user',
            {

                    email: user.email,
                    password: user.password
            })
            .then(response => {
                console.log(response.data);
                localStorage.setItem('auth_token',response.data.access_token)
                localStorage.setItem('user_type',response.data.user_type)
                history.push(`/${response.data.user_type}`)
                return (dispatch(apiSuccess(response.data.results)))
            })
            .catch(function (error) {
                console.log(error);
            })
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