import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Link , Routes, Route} from "react-router-dom";
import VendingMachine from './VendingMaching';
import Candy from './Candy';
import Chips from './Chips';
import Cookies from './Cookies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine></VendingMachine>}></Route>
        <Route path="/candy" element={<Candy></Candy>}></Route>
        <Route path="/chips" element={<Chips></Chips>}></Route>
        <Route path="/cookies" element={<Cookies></Cookies>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
