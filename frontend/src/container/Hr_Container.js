import Hr from '../component/Hr'
import { hr,toggleModal,assetDataCall,addAssetDataCall,pushToHome,updateAssetDataCall,filterData,getCountry} from "../action/Action";
import { connect } from 'react-redux'


const assets_prop = (assets,filter_term) => {
        console.log(assets)
        let searchTerm = new RegExp(filter_term,'i')
        let arrOfObj = Object.values(assets)
        arrOfObj = arrOfObj.filter(a=>a.name.match(searchTerm))
        return arrOfObj
}


const mapStatetoProps = (state) => {
    return{
        hr: state.toggle_reducer.hr,
        open: state.toggle_reducer.open,
        asset_prop: assets_prop(state.toggle_reducer.assets,state.toggle_reducer.filterTerm),
        countries: state.toggle_reducer.countries,
        // obj:state.toggle_reducer[54]
        // asset_prop:state.toggle_reducer.assets
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
        filterData: (data)=>dispatch(filterData(data)),
        getCountry: (data)=>dispatch(getCountry(data))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Hr)