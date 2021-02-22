import './App.css';
import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Form from './components/Form';
import Sentence from './components/Sentence';
import { postSentence } from "./apiCalls"

// Form component - make files
  // put Formik form inside

// separate component for completed paragraph? 
// validation library and formik for forms
  // how to get input userSelections from Form to Sentence

// 3) route to different page (ideally) for RFP preview 
  // submit button
  // edit answers button to go back to previous page

// 4) request submitted view / user feedback

function App() {
  const [userSelections, setUserSelections] = useState({})

  const saveSelections = (userSelections) => {
    console.log('hi')
    setUserSelections(userSelections)
  }
  // store state of each form input in App 

  const addSentence = async (sentence) => {
    try {
      const addSentence = await postSentence(sentence)
      console.log(addSentence)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Use Case Builder</h1>
      </header>
      <Switch>
        <Route
          exact path='/form'
          render={() => (
            <>
              <Form saveSelections={saveSelections} addSentence={addSentence}/>
              {userSelections.role && <Sentence userSelections={userSelections}/>}
            </>
          )}
        >
        </Route>
        <Route
          exact path='/summary'
          render={() => (
            <Sentence userSelections={userSelections} addSentence={addSentence}/>
          )}
        >  
        </Route>
      </Switch>
    </div>
  );
}

export default App;
