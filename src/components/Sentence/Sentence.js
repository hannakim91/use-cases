import React from 'react';

//should be separate page view after submit button
// have a back button to go back to form page

const Sentence = ({ userSelections }) => {
  return (
    <div>
      <h2>Use Case</h2>
      <p>
      {userSelections.role ? userSelections.role : '[LEGAL PROFESSIONAL]'} at {userSelections.businessType ? userSelections.businessType : '[BUSINESS TYPE]'} use {userSelections.productName ? userSelections.productName : '[PRODUCT NAME'} when {userSelections.triggerEvent ? userSelections.triggerEvent: '[TRIGGER/EVENT]'} in order to {userSelections.useCase ? userSelections.useCase : '[USE CASE]'}.
      </p>
      <button>Back</button> 
      <button>Submit</button>
      
    </div>
  )
}

export default Sentence 