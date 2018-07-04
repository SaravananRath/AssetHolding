import Hr from '../component/Hr'
import { hr } from "../action/Action";
import { connect } from 'react-redux'

const mapStatetoProps = (state) => {
    return{
        hr: state.hr
    }
}
const mapDispathtoProps = (dispatch) => {
    return{
        getHr: () => dispatch(hr())
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(Hr)