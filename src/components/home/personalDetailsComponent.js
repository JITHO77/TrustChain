import React, { useState } from 'react';
import PropTypes from  'prop-types';
import { Formik, Form, Field, } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextareaAutosize, Card, CardContent, TextField} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import * as yup from 'yup';
import { Select, SimpleFileUpload} from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      width:'85%',
      margin: theme.spacing(1),
      
    },
    button: {
     marginTop:'3%',
      width:'25%'
    },
    select:{
      marginTop:'3%',
      width:'25%',
    },
    textArea:{
        marginTop:'3%',
          
    }
  }));

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Full Name is required'),
    state: yup
      .string()
      .required('State is Required'),
    address: yup
      .string()
      .required('Address is Required'),
    phno: yup
      .string()
      .required('Phone Number is Required')
      .min(10),
    witness: yup
      .string()
      .required('image is Required'),
    
    wPhno: yup
      .string()
      .required('ID is Required')
      .min(10),
    
    
  });


function PersonalDetails({homeData, nextStep, setHomeData}){
   const classes = useStyles();
        
        return(
         <div className="mt-5 mb-5">   
                
                     <h3>Personal Details</h3>
        
                <Card>
                    <CardContent>
                    <Formik
                    initialValues={homeData}
                    onSubmit={values => {
                  console.log('values', values)
                    setHomeData(values);
                    nextStep();
                    }}
                    validationSchema={validationSchema}
                    >
                    {({ errors, touched }) => (
                        <Form className={classes.form}>
                          <Field
                            name='name'
                            label='Full Name *'
                            margin='normal'
                            as={TextField}
                            error={touched.name && errors.name}
                            helperText={touched.name && errors.name}
                          />
                    
                          <FormControl name="state"
                          
                          className={classes.select}>
                          <InputLabel >State *</InputLabel>
                          <Field name="state"  
                          component={Select}
                          
                         >
                         
                            <MenuItem value="Kerala">Kerala</MenuItem>
                            <MenuItem value="TamilNadu">TamilNadu</MenuItem>
                            <MenuItem value="Banglore">Banglore</MenuItem>
                    
                          </Field>
                        </FormControl>
                        <label className="error">{touched.state && errors.state} </label> 
                          
                          <Field
                            name='address'
                            placeholder='Permenent Address *'
                            margin='normal'
                            rows="3"
                            as={TextareaAutosize}
                            className={classes.textArea}
                            error={touched.address && errors.address}
                            helperText={touched.address && errors.address}
                          />
                          <label className="error">{touched.address && errors.address}
                          </label> 
                         
                            <Field
                            type="number"
                            name='phno'
                            label='Phone Number *'
                            margin='normal'
                            as={TextField}
                            error={touched.phno && errors.phno}
                            helperText={touched.phno && errors.phno}
                            />
                           
                            <Field
                            name='witness'
                            label='Name Of Witness *'
                            margin='normal'
                            as={TextField}
                            error={touched.witness && errors.witness}
                            helperText={touched.witness && errors.witness}
                            />
                            <Field
                            type="number"
                            name='wPhno'
                            label='Phone Number Of Witness *'
                            margin='normal'
                            as={TextField}
                            error={touched.wPhno && errors.wPhno}
                            helperText={touched.wPhno && errors.wPhno}
                            />
                            

                          <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            className={classes.button}
                          >
                            Save And Continue
                          </Button>
                        </Form>
                      )}
                 
             </Formik>
                    
                    </CardContent>
                </Card>
                
        </div>
                   
    
           
        );
    }


export default PersonalDetails;

PersonalDetails.propTypes = {
    medicalData: PropTypes.object.isRequired,
    setMedicalData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
  };
  