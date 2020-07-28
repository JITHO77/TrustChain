import React, {Component} from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }
    render(){

        const {values, handleChange} = this.props;

        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"></AppBar>
                    <TextField 
                    label="Enter your name"
                    floatingLabelText="Full Name"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    />
                    <br/>
                    <TextField 
                    label="Enter your state"
                    floatingLabelText="State"
                    onChange={handleChange('state')}
                    defaultValue={values.state}
                    />
                    <br/>
                    <TextareaAutosize
                    label="Permenent Address"
                    onChange={handleChange('address')}
                    defaultValue={values.address}
                    />
                    <br/>
                    <Button 
                        title="continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}

                    />

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
