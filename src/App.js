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
        <h2>Ed's Todo List</h2>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos} />

      <footer className="footer">
        
        <h4>Tutorial by <a href="https://www.youtube.com/watch?v=pCA4qpQDZD8">Dev Ed</a></h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pCA4qpQDZD8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </footer>
      
    </div>
  );
}

export default App;
