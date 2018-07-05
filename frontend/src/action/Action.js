import axios from 'axios'



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


export function apiCall(user){
    return(dispatch) => {
        axios.post('http://localhost:3001/auth_user',
            {

                    email: user.email,
                    password: user.password
            })
            .then(response => {
                console.log(response.data);
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