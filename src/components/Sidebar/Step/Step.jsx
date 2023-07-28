import React from 'react'
import "./Step.css"
function Step({isCurrentStep, stepNumber, stepText}) {
  return (
    <div className='Step'>
          <p className={`Stepnumber ${isCurrentStep && "Selected"}`}>{stepNumber}</p> 
          <div className='Stepcontent'>
            <p className='Stepdescription'>STEP {stepNumber}</p>  
            <p className='Stepname'>{stepText}</p>  
          </div> 
    </div>
  )
}

export default Step