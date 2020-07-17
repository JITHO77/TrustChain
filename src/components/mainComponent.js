import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import Request from './requestComponent';
import RequestHome from './requestHomeComponent';
import Personaldetails from './personalDetailsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {incStatus} from '../redux/ActionCreater';


const mapStateToProps = (state) => {
    return {
        images: state.images,
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
            
             <Redirect to="/home" />
             </Switch>
             <Footer />
             </div>
             
              
         );
     }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Main)) ;