
import 'bulma/css/bulma.css'
import React, { useState, useEffect } from 'react'
import './styles/main.scss'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Header from './Header/Header'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //This is for the status filter feature, not requested, but I didn't want to delete it. I hid it.
  useEffect(()=>{
    filterHandler()
  },[status, todos])

  //When the element is loaded, I fetch the saved todos (Goals)
  useEffect(()=>{
    getLocalTodos()
  },[])

  // When todos (goals) change, I save them to the browser storage
  useEffect(()=>{
    saveLocalTodos()
  },[todos])  

  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      setTodos([])
    }else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  //Part of the hidden (but working) filter feature.
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true))
        break;
      case 'uncompleted':  
        setFilteredTodos(todos.filter(todo=> todo.completed === false))
        break;
      case 'all':  
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
    
      <Header/>
      <div className="padding-top-diego">
        <Form 
          status={status} 
          setStatus={setStatus} 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
        />
        <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
      </div>
    </div>
  );
}

export default App;