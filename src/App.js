
import React from 'react';
import DailyTimeTable from './components/DailyTimeTable';
import Title from './components/Title';
import './App.css';


function App() {

  
  return (
    <div className="App">
      <div className="outline">
      <Title/>
      <DailyTimeTable/>
    </div>
    </div>
  );
}

export default App;
