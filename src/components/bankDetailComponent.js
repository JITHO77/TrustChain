import React, {Component, use} from 'react';
import {Button, Label,Col, Form, FormGroup, Input} from 'reactstrap';
import { connect } from 'react-redux'
import { incStatus } from '../redux/ActionCreater';

const mapDispatchToProps = (dispatch) =>({
    incStatus:(status) => dispatch(incStatus(status)),
})

class Bankdetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            accountNo:'',
            IFSC:'',
            amount:'',
            agree:false,
        }   
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(){
        this.props.incStatus(75)
    }
    
    render(){  
        
    return(
                <div className="container">
                <div className="row ">
                <div className="col-12 col-md mt-5 ">
                        <h3>Submit Bank details</h3>
                </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="row">
                        <Label htmlFor="bankAccount" md={2}>Bank Account</Label> 
                        <Col md={10}>
                            <Input type="text" id="bankAccount" name="bankAccount"
                             placeholder="Bank Account Number"
                             onChange={(event)=>this.setState({ accountNo: event.target.value})}
                             value={this.state.accountNo} 
                            />
                        </Col>
                    </FormGroup>

                   
                    <FormGroup className="row">
                        <Label htmlFor="ifsc" md={2}>IFSC code</Label> 
                        <Col md={10}>
                            <Input type="text" id="ifsc" name="ifsc"
                             placeholder="IFSC Code"
                             onChange={(event)=>this.setState({ IFSC: event.target.value})}
                             value={this.state.IFSC} 
                            />
                        </Col>
                    </FormGroup>
                   
                    <FormGroup className="row">
                        <Label htmlFor="amount" md={2}>Amount</Label> 
                        <Col md={10}>
                            <Input type="text" id="amount" name="amount"
                             placeholder="Amount"
                             onChange={(event)=>this.setState({ amount: event.target.value})}
                             value={this.state.amount} 
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

export default connect(null, mapDispatchToProps)(Bankdetails);