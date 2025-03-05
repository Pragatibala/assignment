import React, { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/ToContext'
import TodoForm from "./components/TodoForm"
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodos] = useState([])
   
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const deleteTodo = (id)=>(
    setTodos((prev)=> prev.filter((todo)=>todo.id !== id))
  )

  const updateTodo =(id,todo)=>{
    setTodos((prev)=> prev.map((eachTodo)=>(eachTodo.id === id ? todo : eachTodo)))
  }

  const toggleTodo = (id)=>{
    setTodos((prev)=> prev.map((eachTodo)=> eachTodo.id === id ? {...eachTodo, completed: !eachTodo.completed} : eachTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
  
      <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleTodo}}>
<div className="bg-[#172842] min-h-screen py-12 px-72 w-full">
  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 m-3 text-white">
    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
    <div className="mb-4 outline p-2 rounded-2xl">
      <TodoForm/>
    </div>
    <div className="flex flex-wrap gap-y-3">
      {todos.map((todo)=>(
        <div key={todo.id} className='w-full'>
        <TodoItem todo={todo}/>
      </div>
      ))}
    </div>
  </div>
</div>
      </TodoProvider>
    
  )
}

export default App
