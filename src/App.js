import React, { useState, useEffect } from 'react'

import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList"
function App() {
  const [inputText, setInputText] = useState("")  
  const [todos, setTodos] = useState([])//todos  
  const [status,setStatus] = useState("all")//Status filtro
  const [filterTodos, setFilterTodos] = useState([])//filtro

  // on init
  useEffect(() => {    
    getLocalTodos()
  },[])

  // quando usa filtro
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  },[todos, status])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
    }
  }
  // save localsotrage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos} />
      <a href="https://youtu.be/pCA4qpQDZD8?list=WL&t=1951" >TodoList Tutorial</a>
    </div>
  );
}

export default App;
