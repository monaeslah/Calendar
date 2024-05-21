import React from 'react';
import DatePicker from './components/index'
import './App.css';
import Other from './components/testComp'

function App() {
  return (
    <div className="App">
     
<DatePicker PopUp={false} autoClose={false} />
{/* <DatePicker PopUp={false} autoClose={true} /> */}

    </div>
  );
}

export default App;
