import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>

            <img className='w-5' src={isComplete ? tick : not_tick} alt="tick-icon" />

            <p className={`text-sky-100 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>
        
        </div>

        <div>
            <img onClick={() => {deleteTodo(id)}} className='w-5 cursor-pointer' src={delete_icon} alt="delete-icon" />
        </div>
    
    </div>
  )
}

export default TodoItems