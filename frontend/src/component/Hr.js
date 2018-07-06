import React, {Component} from 'react'
import Modal from 'react-modal'
import HrAddAssetForm from './HrAddAssetForm'
import './Hr.css'
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper";
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

    componentDidMount() {
        this.props.getHr()
        this.props.assetDataCall()
        console.log(this.props.asset_prop)
    }
    renderTable()  {
        let { asset_prop } = this.props;
        if(asset_prop=== undefined){
            return(<div>Loading</div>)
        }
        return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Assets</TableCell>
                        <TableCell>Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {asset_prop.map(n => {
                        return (
                            <TableRow key={`${n.name}`}>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.count}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
        )
    }
    render(){
        // console.log(this.props.asset_prop.assets[0])
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
                    {this.renderTable()}
                </div>
            </div>
        )
    }
}
export default Hr