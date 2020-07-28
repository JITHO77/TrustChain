import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1)
  },
  inline: {
    display: 'inline',
  },
}));

export default function Confirmation ({ medicalData, prevStep, nextStep }){
  const classes = useStyles();
  const { name, state, address, phno, image, id, hName, hAddress, hPhno,doctor,  mCert, accountHolder, accountNumber
  , IFSC, amount, request} = medicalData;
  return (
    <>

      <div>
        <List>
          <ListItem>
            <ListItemText 
              primary={`Name : ${name}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`State : ${state}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Address : ${address}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
          <ListItemText
            primary={`Phone : ${phno}`}
         
            className={classes.textCenter}
          />
        </ListItem>
          <ListItem>
            <ListItemText
              primary={`Image : ${image.name}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`ID : ${id.name}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Hospital Name : ${hName}`}
              className={classes.textCenter}
            />
          </ListItem>
         
          <ListItem>
            <ListItemText
              primary={`Hospital Address : ${hAddress}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
          <ListItemText
            primary={`Hospital Phone : ${hPhno}`}
            className={classes.textCenter}
          />
        </ListItem>
          <ListItem>
            <ListItemText
              primary={`Doctor : ${doctor}`}
        
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Medical Certificate : ${mCert.name}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Account Holder : ${accountHolder}`}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Account Number : ${accountNumber}`}
            
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`IFSC Code : ${IFSC}`}

              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Amount : ${amount}`}

              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Request : ${request}`}
              className={classes.textCenter}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </>
  );
};

Confirmation.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};