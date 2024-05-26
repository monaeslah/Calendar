import React from 'react';
import DatePicker from './components/index'
import './App.css';
import Other from './components/testComp'

function App() {
  return (
    <div className="App">
     
<DatePicker PopUp={false} autoClose={false} year={0} month={0} />
{/* <DatePicker PopUp={false} autoClose={true} /> */}

    </div>
  );
}

export default App;
