import axios from 'axios'
import { push } from 'react-router-redux'

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
export function addAssetDataCall(data){
    return(dispatch) => {
        axios({
            method: 'post',
            headers:{Authorization: localStorage.getItem('auth_token')},
            url: 'http://localhost:3001/api/hr/create_company_asset',
            data: {
                'company_asset_params': data
            }
        })
            .then(response =>{
                console.log(response)
                dispatch(assetDataCall())
                // return(
                //     dispatch(addAssetDetailCallSuccess(response))
                // )
            })
            .catch(function(error){
                console.log(error)
            })
    }
}

// export function addAssetDetailCallSuccess(){
//     type:'ADD_ASSET_DATA_CALL_SUCCESS'
// }
export function assetDataCall(){
    return(dispatch) => {
    axios.get('http://localhost:3001/api/hr/dashboard',{
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

export function assetDataCallSuccess(assets){
    return{
        type: 'ASSET_DATA_CALL',
        assets
    }
}

export function pushToHome(){
    return(dispatch) => {
        dispatch(push('/'))
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