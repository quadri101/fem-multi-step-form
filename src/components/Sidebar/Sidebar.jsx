import React from 'react'
import Step from './Step/Step'

import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='Sidebar'>
        <img className='Sidebar--image' src='/images/bg-sidebar-desktop.svg'/>
        <div className='Sidebar--content'>
        <Step stepNumber={1} stepText={"your info"} isCurrentStep={true}/>
            <Step stepNumber={2} stepText={"select plan"} isCurrentStep={false}/>
            <Step stepNumber={3} stepText={"add-ons"} isCurrentStep={false}/>
            <Step stepNumber={4} stepText={"summary"} isCurrentStep={false}/>
            
        </div>
    </div>
  )
}

export default Sidebar