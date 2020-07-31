import React, {Component} from 'react';

import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Col} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
class DonateHome extends Component{
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
                            <CardSubtitle>Donate To Save A Life</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={this.props.images.medical} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Donate</CardText>
                            
                                    <Button component={Link} to="/viewMedicalRequest" color="primary" >Donate</Button>
                                
                        </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>FOR SHELTER</b></CardTitle>
                            <CardSubtitle>Donate To Build House</CardSubtitle>
                        </CardBody>
                        <img width="85%" src={this.props.images.house} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Donate</CardText>
                            
                                    <Button type="button" color="primary">Donate</Button>
                                
                        </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>FOR ORPHANAGE</b></CardTitle>
                            <CardSubtitle>Donate To Orphanages</CardSubtitle>
                        </CardBody>
                        <img width="54.5%" src={this.props.images.orphanage} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Donate</CardText>
                            
                                    <Button type="button" color="primary">Donate</Button>
                                
                        </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mb-3">
                
                        <Card>
                        <CardBody>
                            <CardTitle><b>FOR FARM</b></CardTitle>
                            <CardSubtitle>Donate To Farmers</CardSubtitle>
                        </CardBody>
                        <img width="98%" src={this.props.images.farm} alt="Card image cap" />
                        <CardBody>
                            <CardText>Click Below To Donate</CardText>
                            
                                    <Button type="button" color="primary">Donate</Button>
                                
                        </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export  default DonateHome;