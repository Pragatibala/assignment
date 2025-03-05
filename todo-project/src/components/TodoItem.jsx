import React, { useState } from 'react'
import {useTodo} from '../context/ToContext'

function TodoItem({todo}) {  

    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const {updateTodo,deleteTodo,toggleTodo} = useTodo()

    const toggleDone = ()=>{
        toggleTodo(todo.id)
    }

    const editTodo = ()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
        }

  return (
    <>
      <div className={`flex border border-black/10 rounded-lg py-2 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#b6e091]" : "bg-[#beaec9]" }`}>
        <input type="checkbox"
        className='cursor-pointer ms-1' 
        checked={todo.completed} 
        onChange={toggleDone}
        />
        <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" :"border-transparent"} ${todo.completed ? 'line-through':""}`} value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!isTodoEditable}/>
        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50' onClick={()=>{
            if (todo.completed) return
            if(isTodoEditable){
                editTodo()
            }else setIsTodoEditable((prev)=> !prev)
        }} disabled={todo.completed}>{isTodoEditable ? "📁" : "✏️"}</button>
        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" onClick={()=>deleteTodo(todo.id)}>❌</button>
    </div>
    </>
  )
}

export default TodoItem
