"use client"

import { useState, useEffect } from "react"

export default function Todo(){
    const [todo, setTodo] = useState({})

    useEffect(async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
            )
           const result = await response.json();
           setTodo(result);
    },[])
    
    return(
        <div>
            <h2>{todo.title}</h2>
            <h2>{todo.id}</h2>
        </div>
    )
}