import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignPage from "./components/signpage/SignPage";
import HomePage from './components/homepage/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignPage/>}/>
        <Route path='/home/:id' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;