import React, { useState } from 'react'
import {useTodo} from '../context/ToContext'

const TodoForm = () => {
    const [todo,setTodo] = useState("")
    
    const {addTodo} = useTodo()
    
    const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        
        addTodo({todo,completed:false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className='flex'>
        <input type="text" placeholder='Write Todos...' className='w-full p-2' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm
