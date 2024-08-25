"use client";

import React, { useEffect, useState } from 'react'

export default function todos() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    setTodos(todos || [])
  }

  return (
    <>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>{todo.title} - {todo.completed ? '✅' : '❌'}</li>
          )
        })}
      </ul>
    </>
  )
}
