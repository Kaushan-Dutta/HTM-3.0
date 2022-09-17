import React from 'react';
import './App.css';
import Navigation from './component/Navigation';
import {Route,Routes} from 'react-router-dom';
import BlockChain from './models/BlockChain';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation/>}/>
      <Route path="/:slug" element={<BlockChain/>}/>
    </Routes>
    </>
  );
}

export default App;
