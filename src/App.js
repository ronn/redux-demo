import React from 'react'
import './App.css'
import TodoComponent from "./todo/components/todoComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoComponent />
      </header>
    </div>
  );
}

export default App;
