import React, { useState } from 'react';
import PropTypes from  'prop-types';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import {Button, TextareaAutosize, Card, CardContent} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';

import * as yup from 'yup';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width:'85%',
        margin: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1)
      },
  
      select:{
        marginTop:'3%',
        width:'25%'
      },
      textArea:{
          marginTop:'4%',
          
      }
  }));

  const validationSchema = yup.object({
     request: yup
      .string()
      .required(' Request is Required'),

     agree:yup.bool().oneOf([true], 'You Must Agree')
      

  
    
  });


function MyRequest({medicalData, nextStep, prevStep, setMedicalData}){
   const classes = useStyles();
    const [direction, setDirection] = useState('back');
        return(
         <div className="mt-5 mb-5">   
                
                     <h3>My Request</h3>
        
                <Card>
                    <CardContent>
                    <Formik
                    initialValues={medicalData}
                    onSubmit={values => {
                      setMedicalData(values);
                      direction === 'back' ? prevStep() : nextStep();
                    }}
                       validationSchema={validationSchema}
                       >
                       {({ errors, touched }) => (
                           <Form className={classes.form} >
                             <Field
                               name='request'
                               placeholder='Your Request And Your Financial Need *'
                               margin='normal'
                               rows="12"
                               className={classes.textArea}
                               as={TextareaAutosize}
                               error={touched.request&& errors.request}
                               helperText={touched.request&& errors.request}
                             />
                             <label className="error">{touched.request&& errors.request}</label>
                             <label>
                             <Field 
                             type="checkbox" name="agree"
                              />
                             {" I agree all the details are true "}
                           </label>
                           <label className="error">{touched.agree&& errors.agree}</label>
                             
                              
                               <div className="mt-5">
                               <Button
                                 type='submit'
                                 variant='contained'
                                 color='primary'
                                // className={classes.button}
                                 onClick={() => setDirection('back')}
                               >
                                 Back
                               </Button>
                               <Button
                               type='submit'
                               variant='contained'
                               color='primary'
                               className={classes.button}
                               onClick={() => setDirection('forward')}
                             >
                               Save And Continue
                             </Button>
                             
                             </div>
                           </Form>
                         )}
                    
                </Formik>
                    </CardContent>
                </Card>
                
        </div>
                   
    
           
        );
    }


export default MyRequest;

MyRequest.propTypes = {
    medicalData: PropTypes.object.isRequired,
    setMedicalData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
  };
  