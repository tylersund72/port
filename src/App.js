import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
