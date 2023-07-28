import React from 'react'
import { Form, redirect } from 'react-router-dom'

import "./YourInfo.css"

export function action(){

return redirect("/selectplan");
}
function YourInfo() {
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number</p>

      <Form method='post' className='info-form'>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" name='name' />

        <label htmlFor="email">Email Address</label>
        <input id='email' type="email" name='email' />

        <label htmlFor="number">Phone Number</label>
        <input id='number' type="tel" name='phoneNumber' required={true} />

        
      <button type='submit' >
        Next Step
      </button>
      </Form>

    </div>
  )
}

export default YourInfo