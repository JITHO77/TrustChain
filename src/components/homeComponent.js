import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div class="container"> 
                <div class="row">
                <div className="col-12 col-md mt-1 ">
                       <img src={this.props.images.image1} class="img-fluid" ></img>
        
                    </div>
                    <div className="col-12 col-md mt-5 ">
                        <h3>
                            Eliminates The MiddleMan
                        </h3>
                        <p>We can directly pay to the user without depending on a middle man</p>
                    </div>
                </div>

                <div class="row">

                <div className="col-12 col-md mt-5 ">
                <h3>
                    Transparent And Genuine
                </h3>
                <p>Frauds can be identified easily!<br/> No money overflow.</p>
                <p></p>
                </div>

                <div className="col-12 col-md mt-1 ">
                       <img src={this.props.images.image2} class="img-fluid" ></img>
        
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Home ;