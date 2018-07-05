import React, {Component} from 'react'
import Modal from 'react-modal'
import ContactForm from './Form'
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Employee extends Component{
    submit = (values) => {
        console.log(values)
        this.props.toggleModal()
    }

    componentDidMount(){
        this.props.getEmployee()
    }

    render(){
        return(
            <div>
                <h1>Employee</h1>
                <h2>{"Data from the store: "+this.props.employee}</h2>

                <div>
                    <button onClick={this.props.toggleModal}>Open Modal</button>
                    <Modal
                        isOpen={this.props.open}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                       <ContactForm onSubmit={this.submit}/>

                    </Modal>
                </div>
            </div>

        )
    }
}
export default Employee