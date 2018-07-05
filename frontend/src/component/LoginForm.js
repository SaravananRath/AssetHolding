import React from 'react'
import  { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const buttonStyle = {
    position: 'relative',
    left: '90px',
    top: '25px',
    marginBottom: '30px'
}


let LoginForm = (props) =>{
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='username' type='text'
                       component={({input}) =>
                           <TextField
                               value={input.value}
                               onChange={input.onChange}
                               fullWidth
                               autoComplete='off'
                               label='Username'
                           />
                       } />
            </div>
            <div>
                {/*<Field name="password" component='input' type="password"/>*/}
                <Field name='password'
                       component={({input}) =>
                           <TextField
                               value={input.value}
                               onChange={input.onChange}
                               fullWidth
                               autoComplete='off'
                               label='Password'
                               type='password'
                           />
                       } />
            </div>
            <Button type="submit" variant='raised' color='primary' style={buttonStyle}>Login</Button>
        </form>
    )
}

LoginForm = reduxForm({form:"login"})(LoginForm)

export default LoginForm