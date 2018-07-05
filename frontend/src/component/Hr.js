import React, {Component} from 'react'
import Modal from 'react-modal'
import HrAddAssetForm from './HrAddAssetForm'
import './Hr.css'
import SimpleTable from './Table'
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root')

class Hr extends Component{

    submit = (values) => {
        console.log(values)
        this.props.toggleModal()
    }

    componentDidMount(){
        this.props.getHr()
    }
    render(){
        return(
            <div>
                <h1>HR</h1>
                <h2>{"Data from the store: "+this.props.hr}</h2>
                <div>
                    <button onClick={this.props.toggleModal}>Add Asset</button>
                    <Modal
                        isOpen={this.props.open}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        // className="Modal"
                    >
                        <HrAddAssetForm onSubmit={this.submit}/>

                    </Modal>
                   {/*< SimpleTable/>*/}
                </div>
            </div>
        )
    }
}
export default Hr