import {createContext, useContext} from 'react'

export const ToContext = createContext({
todos:[{
    id:1,
    todo:'todo msg',
    complete:false,
},
],
addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleTodo:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(ToContext)
}
export  const  TodoProvider = ToContext.Provider