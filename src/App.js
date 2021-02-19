import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import Sentence from './components/Sentence'

// Form component - make files
  // put Formik form inside


// separate component for completed paragraph? 
// validation library and formik for forms
  // how to get input values from Form to Sentence

// 3) route to different page (ideally) for RFP preview 
  // submit button
  // edit answers button to go back to previous page

// 4) request submitted view / user feedback

function App() {
  const [userSelections, setUserSelections] = useState({})

  const saveSelections = (values) => {
    console.log('hi')
    setUserSelections(values)
  }

  return (
    <div className="App">
      <Form saveSelections={saveSelections}/>
      <Sentence userSelections={userSelections}/>
    </div>
  );
}

export default App;
