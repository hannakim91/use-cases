import React from 'react';

const Sentence = ({ userSelections }) => {
  return (
    <div>
      <h2>Use Case</h2>
      <p>
      {userSelections.role ? userSelections.role : '[LEGAL PROFESSIONAL]'} at {userSelections.businessType ? userSelections.businessType : '[BUSINESS TYPE]'} use {userSelections.productName ? userSelections.productName : '[PRODUCT NAME'} when {userSelections.triggerEvent ? userSelections.triggerEvent: '[TRIGGER/EVENT]'} in order to {userSelections.useCase ? userSelections.useCase : '[USE CASE]'}.
      </p> 
      
    </div>
  )
}

export default Sentence 