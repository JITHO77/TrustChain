import React, { useState } from 'react';


import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import {Card , CardContent}from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import PersonalDetails from './personalDetailsComponent';
import HospitalDetails from './hospitalDetailsComponent';
import BankDetails from "./bankDetailComponent";
import MyRequest from './myRequest';
import Confirmation from './Confirmation';
import Success from './Success';

  function getSteps() {
    return ['Personal Details', 'House And Clarification Details', 'Bank Details', 'My Request', 'Confirmation'];
  }

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop:'3%'
      },
     
   
  }));

  function StepperComponent({step}){
    const classes = useStyles();
    const steps = getSteps();
      return(
        <Card className="mt-3">
            <CardContent>
            <div className={classes.root}>
            <Stepper activeStep={step} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            
          </div>
            
            </CardContent>
        </Card>
      
      );
  }


 function HomeRequest() {
  
  const[step, setStep] = useState(0);

  const[homeData, setHomeData] = useState({
      name: '',
      state:'' ,
      address:'',
      phno:'',
      job:'',
      witness:'',
      wPhno:'',
      location:'',
      plan:'',
      plotHouse:'',
      villageCert:'',
      accountHolder:'',
      accountNumber:'',
      IFSC:'',
      amount:'',
      request:'',
      agree:false,

  });

    
   const nextStep = () => setStep(prev => prev + 1);
   const prevStep = () => setStep(prev => prev - 1);

    switch(step) {
                case 0:
                    return (<div className="container">
                            <StepperComponent step={step}/>
                            <PersonalDetails
                            nextStep={nextStep}
                            homeData={homeData}
                            setHomeData={setHomeData}
                            />
                            </div>
                      
                          )
                case 1:
                    return (<div className="container">
                            <StepperComponent step={step}/>
                            <HospitalDetails
                            nextStep={nextStep}
                            prevStep={prevStep}
                            homeData={homeData}
                            setHomeData={setHomeData}
                            />
                            </div>)
                case 2:
                    return (<div className="container">
                            <StepperComponent step={step}/>
                            <BankDetails
                            nextStep={nextStep}
                            prevStep={prevStep}
                            homeData={homeData}
                            setHomeData={setHomeData}
                            />
                            </div>)

                 case 3: 
                    return (<div className="container">
                            <StepperComponent step={step}/>
                            <MyRequest
                            nextStep={nextStep}
                            prevStep={prevStep}
                            homeData={homeData}
                            setHomeData={setHomeData}
                             />  
                            </div>)         
                            
                 case 4: 
                           return (<div className="container">
                                   <StepperComponent step={step}/>
                                   <Confirmation
                                   nextStep={nextStep}
                                   homeData={homeData}
                                   setHomeData={setHomeData}
                                   />   
                                   </div>)
               
                            
                default: 
                    return <Success />
                }
        };
       

  
export default HomeRequest;