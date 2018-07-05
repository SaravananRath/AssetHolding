import React,{Component} from 'react';
import SimpleMediaCard from './LoginCard'

const backGround ={
    backgroundColor:'black'
}
const divStyle = {
    position: 'absolute',
    top: '50%',
    left:' 50%',
    transform: 'translateX(-50%) translateY(-50%)',
    border: '1px solid black',
}
    class Login extends Component{

        submit = (values) => {
            console.log(values);
            this.props.apiCall(values);
        }
        //     componentDidMount(){
        //     this.props.getLogin()
        // }
        render(){
            return(
                <div style={backGround}>
                    {/*<h1>Login</h1>*/}
                    {/*<h2>{"Data from the store: "+this.props.login}</h2>*/}
                    {/*<LoginForm onSubmit={this.submit}/>*/}
                    <div style={divStyle}>
                    <SimpleMediaCard handleSubmit={this.submit}/>
                    </div>
                </div>
            )
        }
    }
    export default Login