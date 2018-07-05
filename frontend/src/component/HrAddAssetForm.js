import React from 'react'
import {Field, reduxForm} from 'redux-form'

let HrAddAssetForm = (props) =>{
    const { handleSubmit} = props
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="assetName">Asset_Name:</label>
                <Field name="assetName" component='input' type='text'/>
            </div>
            <div>
                <label htmlFor="assetCount">Asset_Count:</label>
                <Field name="assetCount" component='input' type='text'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

HrAddAssetForm = reduxForm({form:'add_asset'})(HrAddAssetForm)

export default HrAddAssetForm