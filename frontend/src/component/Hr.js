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
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import CenteredGrid from './Grid.js';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './Header'

const divBody = {
    marginTop:' 20px'
}
const center = {
    display:'block',
    margin: '0 auto',
    width: '160px',
    // border: '1px solid red',
    marginTop:'30px'

}

const closeModalButton = {
    position:'relative',
    left:'0px'
}
const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '500px', // <-- This sets the height
        // overflow: 'scroll' // <-- This tells the modal to scrol
    }
}

Modal.setAppElement('#root')


class Hr extends Component{

    submit = (values) => {
        // console.log(values)
        this.closeModal()
        this.props.addAssetDataCall(values.assets)
        // this.props.assetDataCall()

    }

    componentDidMount() {
        this.props.getHr()
        this.props.assetDataCall()
        // console.log(this.props.asset_prop)
    }
    afterOpenModal(){
        document.body.style.overflow = 'hidden';
    }
    closeModal = () =>{
        document.body.style.overflow = 'scroll';
        this.props.toggleModal();
    }
    renderTable()  {
        let { asset_prop } = this.props;
        // if(asset_prop=== undefined){
        //     return(<div>Access Denied</div>)
        // }
        return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>ASSETS</b></TableCell>
                        <TableCell><b>COUNT</b></TableCell>
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
        if(this.props.asset_prop=== undefined){
            return(<div>Access Denied</div>)
        }
        return(
            <div id='container'>
                <div>
                <MenuAppBar goHome={this.props.pushToHome}/>
                </div>
                {/*<h1>HR DASHBOARD</h1>*/}
                {/*<h2>{"Data from the store: "+this.props.hr}</h2>*/}
                <div style = {center}>
                    <Button variant="contained" color="default" onClick={this.props.toggleModal} >
                        Add Assets &nbsp;<CloudUploadIcon  />
                    </Button>
                </div>
                <div style={divBody}>
                    <Modal
                        isOpen={this.props.open}
                        onAfterOpen={this.afterOpenModal}
                        // onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        // className="Modal"
                    >
                        <div style={closeModalButton}>
                        <button onClick={this.closeModal}>X</button>
                        </div>
                        <HrAddAssetForm onSubmit={this.submit}/>

                        {/*xs, sm, md, lg, and xl.*/}

                    </Modal>
                    <Grid item xs={12} sm={3} >
                    {this.renderTable()}
                    </Grid>
                </div>

                {/*<CenteredGrid/>*/}

            </div>
        )
    }
}
export default Hr