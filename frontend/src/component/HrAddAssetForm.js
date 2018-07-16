import React from 'react'
import {Field,FieldArray,reduxForm} from 'redux-form'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
const renderTextField = ({input, label, type}) => (
    <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
        autoFocus
    />
)
const renderTextField1 = ({input, label, type}) => (
    <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
    />
)


const buttonStyle ={
    display:'block',
    margin: '0 auto',
    width:'105px',
    // border: '1px solid black'
}
const addButton = {
    marginTop:'20px'
}
const deleteButton = {
    marginBottom:'20px'
}
const renderAssets = ({fields}) => (
    <ul>


        {
            fields.map((asset, index)=>(
                <span key={index}>


                    <h3>Asset {index+1}</h3>
                    <div style={deleteButton}>
                    <Button variant="fab" mini color="secondary" onClick={()=>fields.remove(index)}>
                            <DeleteIcon />
                    </Button>
                    </div>
                    {/*<button type='button' onClick={()=>fields.remove(index)}> Remove Asset</button>*/}

                    <Field
                        name={`${asset}.name`}
                        type="text"
                        component={renderTextField}
                        label='Asset Name'

                    />
                    <Field
                        name={`${asset}.count`}
                        type="text"
                        component={renderTextField1}
                        label="Asset Count"
                    />

                </span>
            ))
        }
        <div style={addButton}>
        <Button onClick={()=>fields.push({})}  variant="fab" mini color="primary" aria-label="add" >
            <AddIcon />
        </Button>
        </div>
    </ul>
)

let HrAddAssetForm = props => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <FieldArray name="assets" component={renderAssets}/>
            <div style={buttonStyle}>
            <Button variant="contained" color="default" type='submit' >
                <SaveIcon  />&nbsp;
                Save
            </Button>
            </div>
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