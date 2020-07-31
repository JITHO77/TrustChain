import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import Medical from "./medical/medicalComponent";
import RequestHome from './requestHomeComponent';
import DonateHome from './donateHomeComponent';
import HomeRequest from './home/homeRequestComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {incStatus,} from '../redux/ActionCreater';



const mapStateToProps = (state) => {
    return {
        images: state.images,
        person: state.Person,
    }
}

const mapDispatchToProps = (dispatch) =>({
    incrementStatus: (status) =>{ dispatch(incStatus(status))},
    })

class Main extends Component{
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

             <Redirect to="/home" />
             </Switch>
             <Footer />
             </div>
             
              
         );
     }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Main)) ;