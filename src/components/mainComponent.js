import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{

     render(){
         return(
             <div>
             <Header />
             <Footer />
             </div>
              
         );
     }
}

export default  Main;