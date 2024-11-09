import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login';
import Store from './pages/Store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;