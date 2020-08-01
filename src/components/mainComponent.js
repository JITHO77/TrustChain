import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import Medical from "./medical/medicalComponent";
import RequestHome from './requestHomeComponent';
import DonateHome from './donateHomeComponent';
import HomeRequest from './home/homeRequestComponent';
import Request from './donateMedical/viewRequest';
import ViewNeedy from './donateMedical/viewNeedy';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {incStatus, loadTrustChainData} from '../redux/ActionCreater';



const mapStateToProps = (state) => {
    return {
        images: state.images,
        person: state.Person,
        trustChainData: state.TrustChainData.trustChain
    }
}

const mapDispatchToProps = (dispatch) =>({
    incrementStatus: (status) =>{ dispatch(incStatus(status))},
    loadTrustChainData: () => {dispatch(loadTrustChainData())}
    })

class Main extends Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        console.log('hello')
        this.props.loadTrustChainData();
    }
     render(){
         return(
             <div>
             <Header />
             <Switch>      
                <Route path="/home" component = {()=><Home images={this.props.images}/>}/>
                <Route path="/request" component = {()=><RequestHome images={this.props.images}/>}/>
                <Route path="/donate" component = {()=><DonateHome images={this.props.images}/>}/>
                <Route path="/requestMedical" component = {() => <Medical />} />
                <Route path="/requestHome" component = {() => <HomeRequest />} />
                <Route path="/viewMedicalRequest" component = {() => <Request Data = {this.props.trustChainData}/>} />
                <Route path="/viewMedicalRequest/:name" component = {() => <Request />} />

                <Redirect to="/home" />
             </Switch>
             <Footer />
             </div>
             
              
         );
     }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Main)) ;