import Hr from '../component/Hr'
import { hr,toggleModal } from "../action/Action";
import { connect } from 'react-redux'

const mapStatetoProps = (state) => {
    return{
        hr: state.toggle_reducer.hr,
        open: state.toggle_reducer.open
    }
}
const mapDispathtoProps = (dispatch) => {
    return{
        getHr: () => dispatch(hr()),
        toggleModal: () => dispatch(toggleModal())
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(Hr)