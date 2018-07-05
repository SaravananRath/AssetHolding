import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Asset Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="count">Count</label>
                <Field name="count" component="input" type="text" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm