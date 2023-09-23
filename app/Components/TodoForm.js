"use client"
import { useState } from "react"
import React from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setvalue] = useState("")

  const handleSubmit= e =>{
    e.preventDefault();

    addTodo(value)

    setvalue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className="todo-input"
         value={value}
         placeholder="What's the task today?"
         onChange={(e)=>{
          setvalue(e.target.value)
         }}/>
         <button type='submit' className='todo-btn'>AddTask</button>
    </form>
  )
}

export default TodoForm