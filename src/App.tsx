import React from 'react';
import './App.css';
import Table from './components/table';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirecting every path to the table  */}
        <Route path='/*' element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
