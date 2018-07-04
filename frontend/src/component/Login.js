import React,{Component} from 'react';

    class Login extends Component{
        componentDidMount(){
            this.props.getLogin()
        }
        render(){
            // let name
            // let pass
            return(
                <div>
                <h1>Login </h1>
                    <h2>{"Data from the store: "+this.props.login}</h2>

                    {/*<form onSubmit={e => {*/}
                        {/*e.preventDefault()*/}
                        {/*if (!name.value.trim() || !pass.value.trim()) {*/}
                            {/*return*/}
                        {/*}*/}
                        {/*alert('Name: '+name.value+' '+'Pass:'+pass.value)*/}

                        {/*// dispatch(addTodo(input.value))*/}
                        {/*name.value = ''*/}
                        {/*pass.value = ''*/}
                    {/*}}>*/}
                        {/*<label htmlFor="">Name*/}
                            {/*<input ref={node => name = node} />*/}
                        {/*</label>*/}
                        {/*<br/>*/}
                        {/*<label htmlFor="">Password*/}
                            {/*<input ref={node => pass = node} />*/}
                        {/*</label>*/}

                        {/*<button type="submit">*/}
                            {/*Login*/}
                        {/*</button>*/}
                    {/*</form>*/}
                </div>
            )
        }
    }
    export default Login