import React, { useState } from 'react'

import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList"
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList  />
      <a href="https://youtu.be/pCA4qpQDZD8?list=WL&t=1951" target="_blank">TodoList Tutorial</a>
    </div>
  );
}

export default App;
