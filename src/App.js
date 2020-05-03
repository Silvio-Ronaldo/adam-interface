import React from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import PostQuestion from './components/PostQuestion'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <PostQuestion/>
      <PostList/>
    </>
  );
}

export default App;
