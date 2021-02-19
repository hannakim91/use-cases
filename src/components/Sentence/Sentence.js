import React from 'react';

const Sentence = (props) => {
  return (
    <div>
    sentence 
    {props.userSelections.role ? props.userSelections.role : ''}
    </div>
  )
}

export default Sentence 