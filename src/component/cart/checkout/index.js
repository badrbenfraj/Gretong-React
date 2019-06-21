import React from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';

const steps = 
    [
      {name: 'Delivery Address', component: <StepOne/>},
      {name: 'StepTwo', component: <StepTwo/>},
      {name: 'Payment', component: <StepThree/>},
      {name: 'Finish', component: <StepFour/>}
    ]

export { steps }