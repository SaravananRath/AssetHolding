import React, {Component} from 'react'
class Hr extends Component{
    componentDidMount(){
        this.props.getHr()
    }
    render(){
        return(
            <div>
                <h1>HR</h1>
                <h2>{"Data from the store: "+this.props.hr}</h2>
            </div>
        )
    }
}
export default Hr