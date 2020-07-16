import React, {Component} from 'react';
import {Button, Label,Col, Form, FormGroup, Input} from 'reactstrap';
import { connect } from 'react-redux'
import { incStatus } from '../redux/ActionCreater';

const mapDispatchToProps = (dispatch) =>({
    incStatus:(status) => dispatch(incStatus(status)),
})

class MyRequest extends Component{
    constructor(props){
        super(props);
        this.state={
            request:'',
            agree:false
        }
    }

    handleSubmit = ()=>{
        this.props.incStatus(100)
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md mt-5">
                            <h3>My Request</h3>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className="row">
                                <Col md={10}>
                                    <Input type="textarea" id="request" name="request"
                                    rows="12"
                                    placeholder="About yourself and your financial need in detail"
                                    onChange={(event)=>this.setState({ request: event.target.value})}
                                    value={this.state.request} 
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup className="row">
                                <Col md={{ size: 6, offset: 0}}>
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

export default connect(null, mapDispatchToProps) (MyRequest);