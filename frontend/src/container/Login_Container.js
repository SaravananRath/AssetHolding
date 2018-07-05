import Login from '../component/Login'
import { login } from "../action/Action";
import { connect } from 'react-redux'

const mapStatetoProps = (state) => {
    return{
        login: state.toggle_reducer.login
    }
}
const mapDispathtoProps = (dispatch) => {
    return{
        getLogin: () => dispatch(login())
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(Login)