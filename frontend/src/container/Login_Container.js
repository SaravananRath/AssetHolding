import Login from '../component/Login'
import { apiCall } from "../action/Action";
import { connect } from 'react-redux'

const mapStatetoProps = (state) => {
    return{
        login: state.toggle_reducer.login
    }
}
const mapDispathtoProps = (dispatch) => {
    return{
        apiCall: (user) => dispatch(apiCall(user))
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(Login)