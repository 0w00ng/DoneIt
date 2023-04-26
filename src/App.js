import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts/*" element={<PostList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;