import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import Request from './requestComponent';
import Personaldetails from './personalDetailsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {incStatus} from '../redux/ActionCreater';


const mapStateToProps = (state) => {
    return {
        quotes: state.quotes,
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
             <Route path="/home" component = {()=><Home quote={this.props.quotes}/>}/>
             <Route path="/request" component = {()=><Request/>}/>
            
             <Redirect to="/home" />
             </Switch>
             <Footer />
             </div>
             
              
         );
     }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Main)) ;