import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [todoList, setToDoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setToDoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setToDoList((prvTodos) => {
           return prvTodos.filter((todo) => todo.id !== id)
        })
        
    }

    const toggle = (id) => {
        setToDoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}   
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])

  return (
    <div className='bg-slate-500 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>


{/* --------- title --------- */}
    
    <div className='flex items-center mt-7 gap-2'>

        <img className='w-8 outline outline-amber-500 bg-amber-500 rounded-md' src={todo_icon} alt="image" />

        <h1 className='text-3xl font-semibold text-sky-100'>
            Listify (To-Do List)
        </h1>

    </div>

{/* --------- input box --------- */}

    <div className='flex items-center my-7 bg-sky-100 rounded-full'>

        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder: text-slate-600' type="text" placeholder='New Task Entry'/>

        <button onClick={add} className='border-none rounded-full bg-amber-500 text-black w-16 h-14 text-lg font-medium cursor-pointer'>
           +
        </button>

    </div>

{/* --------- todo list --------- */}

    <div>
        {todoList.map((item, index) => {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })}
    </div>

        
    </div>
  )
}

export default Todo