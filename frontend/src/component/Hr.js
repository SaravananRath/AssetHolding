import React, {Component} from 'react'
import Modal from 'react-modal'
import HrAddAssetForm from './HrAddAssetForm'
// import HrEditAssetForm from './HrEditAssetFrom'
import './Hr.css'
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Tooltip from '@material-ui/core/Tooltip'
// import FilterSearch from './Autosuggest'
// import CenteredGrid from './Grid.js';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './Header'
import Edit from "@material-ui/icons/Edit"

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

// let fAssets = []

class Hr extends Component{
    constructor(props){
        super(props)
        this.state={
            searchTerm:'',
            clicked:false,
            originalCount:'',
            count:'',
            id:'',
            name:''
        }
    }
    handleChange=(e)=>{

        let state= this.state
        state[e.target.name]=e.target.value
        this.setState(state)
        this.props.filterData(this.state.searchTerm)
    }
    handleFormFieldChange =(e)=>{
        let state= this.state
        state[e.target.name]=e.target.value
        this.setState(state)
    }
    handleAssetSubmit=(e)=>{
        e.preventDefault()
        this.setState({clicked:!this.state.clicked})
        let data={
            id:this.state.id,
            count:this.state.count,
            name:this.state.name
        }
        if(this.state.count===''){
            data={
                id:this.state.id,
                count:this.state.originalCount,
                name:this.state.name
            }
        }
        this.props.updateAssetDataCall(data)
        }

        // console.log(this.state.count)

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.searchTerm)
        this.props.filterData(this.state.searchTerm)
    }
    submit = (values) => {
        // console.log(values)
        this.closeModal()
        this.props.addAssetDataCall(values.assets)
        // this.props.assetDataCall()

    }

    submitEdit = (values) => {
        console.log(values)
    }


    componentDidMount() {
        this.props.assetDataCall()
    }
    afterOpenModal(){
        document.body.style.overflow = 'hidden';
    }
    closeModal = () =>{
        document.body.style.overflow = 'scroll';
        this.props.toggleModal();
    }
    handleEdit=(n) =>{
        // console.log(n.id+n.name+n.count)
        // let data={
        //     id:n.id,
        //     name:n.name,
        //     count:100
        // }
        // console.log(data)
        // this.props.updateAssetDataCall(data)
        this.setState({clicked:!this.state.clicked})
        this.setState({id:n.id})
        this.setState({name:n.name})
        this.setState({count:n.count})
        this.setState({originalCount:n.count})

    }
    // renderTable()  {
    //     let { asset_prop } = this.props;
    //     let ArrayOfObj = asset_prop
    //
    //     if (!(Array.isArray(ArrayOfObj))){
    //         ArrayOfObj = Object.values(asset_prop)
    //     }
    //
    //     return(
    //     <Paper>
    //         <Table>
    //             <TableHead>
    //                 <TableRow>
    //                     <TableCell><b>ASSETS</b></TableCell>
    //                     <TableCell><b>COUNT</b></TableCell>
    //                     <TableCell></TableCell>
    //
    //
    //                 </TableRow>
    //             </TableHead>
    //             <TableBody>
    //                 {ArrayOfObj.map(n => {
    //                     return (
    //                         <TableRow key={`${n.name}`}>
    //                             <TableCell>{n.name}</TableCell>
    //                             <TableCell><Tooltip id='tooltip-icon'title='Edit'>{n.count}</Tooltip></TableCell>
    //                             <TableCell><Button onClick={()=>this.handleEdit(n)}><Edit></Edit></Button></TableCell>
    //                         </TableRow>
    //                     );
    //                 })}
    //             </TableBody>
    //         </Table>
    //     </Paper>
    //     )
    // }

    renderFilterderTable()  {
        let { asset_prop } = this.props;

        if(asset_prop!==undefined){
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
                                    {

                                            ((this.state.clicked && n.id===this.state.id)?(<TableCell>
                                                <form onSubmit={(e,n)=>this.handleAssetSubmit(e,n)}>
                                                    <input autoFocus name='count' onChange={(e)=>this.handleFormFieldChange(e)} type="text" defaultValue={this.state.count} onBlur={()=> this.setState({clicked:!this.state.clicked})}/>
                                                    <button type='submit'>Submit</button>
                                                    <button onClick={()=>this.setState({clicked:!this.state.clicked})}>Cancel</button>
                                                </form>
                                            </TableCell>):(<TableCell>
                                                <Tooltip id="tooltip-icon" title="Edit">
                                                <div tooltip='Edit'onClick={()=>this.handleEdit(n)} >
                                                    <input type="text" value={n.count} disabled/>
                                                </div>
                                                </Tooltip>
                                            </TableCell>))


                                    }
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
    else{
            return <div></div>
        }
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
                    {/*<Modal*/}
                        {/*isOpen={this.props.open}*/}
                        {/*onAfterOpen={this.afterOpenModal}*/}
                        {/*// onRequestClose={this.closeModal}*/}
                        {/*style={customStyles}*/}
                        {/*contentLabel="Example Modal"*/}
                        {/*// className="Modal"*/}
                    {/*>*/}
                        {/*<div style={closeModalButton}>*/}
                            {/*<button onClick={this.closeModal}>X</button>*/}
                        {/*</div>*/}

                        {/*<HrEditAssetForm onSubmit={this.submitEdit} data={}/>*/}

                        {/*/!*xs, sm, md, lg, and xl.*!/*/}

                    {/*</Modal>*/}
                    <Grid item xs={12} sm={6} >
                    {/*{this.renderTable()}*/}
                    </Grid>
                    <div style={{'height':'100px'}}>
                    {/*<FilterSearch data={this.props.asset_prop}/>*/}
                    </div>
                    <form onSubmit={(e) =>this.handleSubmit(e)}>
                        <input type="text" name='searchTerm'onChange={(e)=>this.handleChange(e)}/>
                        <button type='submit'>submit</button>
                    </form>
                    {this.renderFilterderTable()}
                </div>

                {/*<CenteredGrid/>*/}

            </div>
        )
    }
}
export default Hr