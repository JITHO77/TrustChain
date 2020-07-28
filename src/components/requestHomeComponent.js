import React, {Component} from 'react';

import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Col} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
class RequestHome extends Component{
    constructor(props){
        super(props);
        this.setState={

        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>MEDICAL</b></CardTitle>
                            <CardSubtitle>Accidents And Health</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={this.props.images.medical} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Make Request!</CardText>
                            
                                    <Button component={Link} to="/requestMedical" color="primary" >Make Request</Button>
                                
                        </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>FOR SHELTER</b></CardTitle>
                            <CardSubtitle>A New House</CardSubtitle>
                        </CardBody>
                        <img width="85%" src={this.props.images.house} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Make Request!</CardText>
                            
                                    <Button component={Link} to="/requestHome" color="primary">Make Request</Button>
                                
                        </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>FOR ORPHANAGE</b></CardTitle>
                            <CardSubtitle></CardSubtitle>
                        </CardBody>
                        <img width="54.5%" src={this.props.images.orphanage} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Make Request!</CardText>
                            
                                    <Button type="button" color="primary">Make Request</Button>
                                
                        </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>FOR FARM</b></CardTitle>
                            <CardSubtitle>Plan To Build Crops</CardSubtitle>
                        </CardBody>
                        <img width="98%" src={this.props.images.farm} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Make Request!</CardText>
                            
                                    <Button type="button" color="primary">Make Request</Button>
                                
                        </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export  default RequestHome;