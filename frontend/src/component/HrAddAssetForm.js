import React from 'react'
import {Field,FieldArray,reduxForm} from 'redux-form'

const renderField = ({ input, label, type}) => (
    <div>
        {/*<label>{label}</label>*/}
        <div>
            <input {...input} type={type} placeholder={label} />
        </div>
    </div>
);

const renderAssets = ({fields}) => (
    <ul>
        <li>
            <button type="button" onClick={()=>fields.push({})}>
                Add Asset
            </button>
        </li>
        {
            fields.map((asset, index)=>(
                <li key={index}>


                    <h4>Asset {index+1}</h4>
                    <button type='button' onClick={()=>fields.remove(index)}> Remove Asset</button>
                    <Field
                        name={`${asset}.name`}
                        type="text"
                        component={renderField}
                        label='Asset Name'
                    />
                    <Field
                        name={`${asset}.count`}
                        type="text"
                        component={renderField}
                        label="Asset Count"
                    />

                </li>
            ))
        }
    </ul>
)

let HrAddAssetForm = props => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <FieldArray name="assets" component={renderAssets}/>
            <button type='submit'>Add Assets</button>
        </form>
    )
}



// let HrAddAssetForm = (props) =>{
//     const { handleSubmit} = props
//     return(
//         <form onSubmit = {handleSubmit}>
//             <div>
//                 <label htmlFor="assetName">Asset_Name:</label>
//                 <Field name="assetName" component='input' type='text'/>
//             </div>
//             <div>
//                 <label htmlFor="assetCount">Asset_Count:</label>
//                 <Field name="assetCount" component='input' type='text'/>
//             </div>
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

HrAddAssetForm = reduxForm({form:'add_asset'})(HrAddAssetForm)

export default HrAddAssetForm