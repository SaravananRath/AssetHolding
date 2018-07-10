import React from 'react';
import {Field,reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/
import TextField from '@material-ui/core/TextField'

const renderTextField = ({input, label, type}) => (
    <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
    />
)

let HrEditAssetForm = props => {
    const { handleSubmit,data } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field
            name=data.count
            type='text'
            component={renderTextField}
            label='Asset Count'
            />
        </form>
    )
}