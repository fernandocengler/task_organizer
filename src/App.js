import React from 'react';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <NoteList />
      <TaskList />
    </div>
  );
};

export default App;
