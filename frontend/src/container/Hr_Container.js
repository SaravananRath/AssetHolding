import Hr from '../component/Hr'
import { hr,toggleModal,assetDataCall } from "../action/Action";
import { connect } from 'react-redux'

const mapStatetoProps = (state) => {
    return{
        hr: state.toggle_reducer.hr,
        open: state.toggle_reducer.open,
        asset_prop:state.toggle_reducer.assets
    }
}
const mapDispathtoProps = (dispatch) => {
    return{
        getHr: () => dispatch(hr()),
        toggleModal: () => dispatch(toggleModal()),
        assetDataCall: () =>dispatch(assetDataCall())
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(Hr)