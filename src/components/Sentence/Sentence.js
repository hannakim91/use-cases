import React from 'react';
import { Link } from 'react-router-dom';

//should be separate page view after submit button
// have a back button to go back to form page

const Sentence = ({ userSelections }) => {
  const submitForm = () => {
    console.log('hi')
  }
  return (
    <div>
      <h2>Use Case</h2>
      <p>
      {userSelections.role ? userSelections.role : '[LEGAL PROFESSIONAL]'} at {userSelections.businessType ? userSelections.businessType : '[BUSINESS TYPE]'} use {userSelections.productName ? userSelections.productName : '[PRODUCT NAME'} when {userSelections.triggerEvent ? userSelections.triggerEvent: '[TRIGGER/EVENT]'} in order to {userSelections.useCase ? userSelections.useCase : '[USE CASE]'}.
      </p>
      <Link to='/form'>
        <button>Back</button> 
      </Link>
      <button onClick={submitForm}>Submit</button>
      
    </div>
  )
}

export default Sentence 