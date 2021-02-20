import React from 'react';

const Sentence = ({ role, businessType, productName, triggerEvent, useCase }) => {
  return (
    <div>
      <h2>Use Case</h2>
      <p>
      {role ? role : '[LEGAL PROFESSIONAL]'} at 
      {businessType ? businessType : '[BUSINESS TYPE]'}
      </p> 
      
    </div>
  )
}

export default Sentence 