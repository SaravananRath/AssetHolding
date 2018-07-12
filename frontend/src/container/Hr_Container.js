import Hr from '../component/Hr'
import { hr,toggleModal,assetDataCall,addAssetDataCall,pushToHome,updateAssetDataCall,filterData} from "../action/Action";
import { connect } from 'react-redux'


const assets_prop = (assets,filter_term) => {
    console.log(assets)

    if(filter_term!==undefined){

        let searchTerm = new RegExp(filter_term,'i')
        let filteredAssets = assets.filter(a=>a.name.match(searchTerm))
        // console.log(filteredAssets)
        return filteredAssets
    }
    return assets

}


const mapStatetoProps = (state) => {
    return{
        hr: state.toggle_reducer.hr,
        open: state.toggle_reducer.open,
        asset_prop: assets_prop(state.toggle_reducer.assets,state.toggle_reducer.filterTerm)
        // filter_prop:state.toggle_reducer.filterTerm
    }
}
const mapDispatchtoProps = (dispatch) => {
    return{
        getHr: () => dispatch(hr()),
        toggleModal: () => dispatch(toggleModal()),
        assetDataCall: () =>dispatch(assetDataCall()),
        addAssetDataCall: (data) => dispatch(addAssetDataCall(data)),
        pushToHome: ()=>dispatch(pushToHome()),
        updateAssetDataCall: (data)=>dispatch(updateAssetDataCall(data)),
        filterData: (data)=>dispatch(filterData(data))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Hr)