import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        quotes: state.quotes,
    }
}

class Main extends Component{
     render(){
         return(
             <div>
             <Header />
             <Switch>      
             <Route path="/home" component = {()=><Home quote={this.props.quotes}/>}/>
             <Redirect to="/home" />
             </Switch>
             <Footer />
             </div>
             
              
         );
     }
}

export default withRouter( connect(mapStateToProps)(Main)) ;