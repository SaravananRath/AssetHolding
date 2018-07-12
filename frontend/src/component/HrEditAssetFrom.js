import React from 'react';
import {Field,reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField'

const renderTextField = ({input, label, type, defVal}) => (
    <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
        defaultValue={defVal}
    />
)

let HrEditAssetForm = props => {
    const { handleSubmit,data } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field
            name={data.count}
            type='text'
            component={renderTextField}
            label='Asset Count'
            defVal={data.count}
            />
            <Button type='submit'>Update &nbsp;<SaveIcon/></Button>
        </form>
    )
}

HrEditAssetForm = reduxForm({form:'edit_asset'})(HrEditAssetForm)

export default HrEditAssetForm