import React, {Component, use} from 'react';
import {Button, Label,Col, Form, FormGroup, Input} from 'reactstrap';
import { connect } from 'react-redux'
import { incStatus } from '../redux/ActionCreater';

const mapDispatchToProps = (dispatch) =>({
    incStatus:(status) => dispatch(incStatus(status)),
})

class Hospitaldetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            hospitalName:'',
            hospitalAddress:'',
            hospitalPhone:'',
            doctor:'',
            medicalCertificate:'',
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
                medicalCertificate: Buffer(reader.result)
            })
            console.log('medicalCertificate', this.state.medicalCertificate);
        }
        }

    handleSubmit(){
        this.props.incStatus(50)
    }
    
    render(){  
        
    return(
                <div className="container">
                <div className="row ">
                <div className="col-12 col-md mt-5 ">
                        <h3>Submit Hospital details</h3>
                </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="row">
                        <Label htmlFor="hospitalName" md={2}>Hospital Name</Label> 
                        <Col md={10}>
                            <Input type="text" id="hospitalName" name="hospitalName"
                             placeholder="Hospital Name"
                             onChange={(event)=>this.setState({ hospitalName: event.target.value})}
                             value={this.state.hospitalName} 
                            />
                        </Col>
                    </FormGroup>

                   
                    <FormGroup className="row">
                        <Label htmlFor="hospitalAddress" md={2}>Hospital Address</Label> 
                        <Col md={10}>
                            <Input type="textarea" id="hospitalAddress" name="hospitalAddress"
                             placeholder="Address"
                             row="6"
                             onChange={(event)=>this.setState({ hospitalAddress: event.target.value})}
                             value={this.state.hospitalAddress} 
                            />
                        </Col>
                    </FormGroup>
                   
                    <FormGroup className="row">
                        <Label htmlFor="hospitalPhone" md={2}>Phone Number</Label> 
                        <Col md={10}>
                            <Input type="tel" id="hospitalPhone" name="hospitalPhone"
                             placeholder="Phone Number"
                             onChange={(event)=>this.setState({ hospitalPhone: event.target.value})}
                             value={this.state.hospitalPhone} 
                             />
                        </Col>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="doctor" md={2}>Doctor</Label> 
                        <Col md={10}>
                            <Input type="tel" id="doctor" name="doctor"
                             placeholder="Doctor"
                             onChange={(event)=>this.setState({ doctor: event.target.value})}
                             value={this.state.Doctor} 
                             />
                        </Col>
                    </FormGroup>
                   
                    <FormGroup className="row">
                        <Label htmlFor="certificate" md={2}>Upload Medical Certificate</Label> 
                        <Col md={10}>
                        <input type="file"  name="certificate"
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

export default connect(null, mapDispatchToProps)(Hospitaldetails);