import React, {Component, use} from 'react';
import {Button, Label,Col, Form, FormGroup, Input} from 'reactstrap';
import { connect } from 'react-redux'
import { incStatus } from '../redux/ActionCreater';

const mapDispatchToProps = (dispatch) =>({
    incStatus:(status) => dispatch(incStatus(status)),
})

class Personaldetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            state:'',
            address:'',
            phone:'',
            image:'',
            Id:'',
            agree:false,
        }   
         this.captureFile = this.captureFile.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    captureFile=(event)=>{
        console.log("hello");
        event.preventDefault();
        const file = event.target.files[0];  
        console.log('file',file)
        const reader = new window.FileReader()    
        reader.readAsArrayBuffer(file);
        reader.onloadend =()=>{
            this.setState({
                image: Buffer(reader.result)
            })
            console.log('image', this.state.image);
        }
        }

    handleSubmit(){
        this.props.incStatus(25)
    }
    
    render(){  
        
    return(
                <div className="container">
                <div className="row ">
                <div className="col-12 col-md mt-5 ">
                        <h3>Submit your details</h3>
                </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="row">
                        <Label htmlFor="firstname" md={2}>Name</Label> 
                        <Col md={10}>
                            <Input type="text" id="firstname" name="name"
                             placeholder="Full Name"
                             onChange={(event)=>this.setState({ name: event.target.value})}
                             value={this.state.name} 
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="address" md={2}>State</Label> 
                        <Col md={10}>
                            <Input type="text" id="state" name="state"
                             placeholder="State"
                             row="6"
                             onChange={(event)=>this.setState({ state: event.target.value})}
                             value={this.state.state} 
                            />
                        </Col>
                    </FormGroup>
                   
                    <FormGroup className="row">
                        <Label htmlFor="address" md={2}>Address</Label> 
                        <Col md={10}>
                            <Input type="textarea" id="address" name="address"
                             placeholder="Address"
                             row="6"
                             onChange={(event)=>this.setState({ address: event.target.value})}
                             value={this.state.address} 
                            />
                        </Col>
                    </FormGroup>
                   
                    <FormGroup className="row">
                        <Label htmlFor="phno" md={2}>Phone Number</Label> 
                        <Col md={10}>
                            <Input type="tel" id="phno" name="phno"
                             placeholder="Phone Number"
                             onChange={(event)=>this.setState({ phone: event.target.value})}
                             value={this.state.phone} 
                             />
                        </Col>
                    </FormGroup>
                    <FormGroup className="row">
                        <Label htmlFor="image" md={2}>Upload image</Label> 
                        <Col md={10}>
                        <input type="file"
                        onChange={this.captureFile}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup className="row">
                        <Label htmlFor="ID" md={2}>Upload ID</Label> 
                        <Col md={10}>
                        <input type="file" 
                        onChange={this.captureFile}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup className="row">
                       <Col md={{ size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" name="agree" checked={this.state.agree} 
                                  onChange={(event)=>this.setState({ agree: event.target.value})}
                                
                                />{ ' '}
                                  <strong>I agree that all the details above are true</strong>
                                </Label>
                            </FormGroup>
                            
                            <FormGroup className="row mt-3">
                                <Col md={{ size: 6, offset: 0}}>
                                    <Button type="submit" color="primary">Save Details</Button>
                                </Col>
                            </FormGroup>
                       </Col>
                       
                    </FormGroup>
                </Form>
                    </div>
                </div>
                </div>
        
    );
 }
}

export default connect(null, mapDispatchToProps)(Personaldetails);