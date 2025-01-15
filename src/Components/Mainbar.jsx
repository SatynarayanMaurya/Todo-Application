import React, { useEffect, useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiCircleClaws } from "react-icons/gi";
import { GrMultimedia } from "react-icons/gr";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import check from "../Assests/check.png"
function Mainbar() {

  const lightMode = useSelector((state)=>state.toggleSlice.isLightMode)
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  useEffect(() => {
    try {
      const storeTodos = localStorage.getItem('todos');
      const storedTodos = JSON.parse(storeTodos)
      if (storedTodos) {
        setTodos(storedTodos);
      }
    } catch (error) {
      console.error('Failed to parse todos from localStorage', error);
      setTodos([]); // Fallback to empty array on error
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // Save todos to localStorage
  }, [todos]); 


  const addTodo = ()=>{
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      id: Date.now(), 
      task: newTodo,
      completed: false,
      important:false
    };
    console.log("New Todo item is : ", newTodoItem)
    // setTodos((prevTodos) => [...prevTodos, newTodoItem]); 
    setTodos((prevTodos) => Array.isArray(prevTodos) ? [...prevTodos, newTodoItem] : [newTodoItem]);
    setNewTodo("");
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Remove the todo with matching id
  };

  const importantTodo = (id)=>{
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, important: !todo.important } : todo
    ));
  }

  return (

    <div>
        
        {/* Enter Todo  */}
        <div className={`${!lightMode ? "bg-[#EEF6EF]": "bg-[#2F3630]" }`}>
            <textarea name="todo" id="todo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}   rows={2} placeholder='Add a task' className=' py-6 px-6 w-full outline-none bg-transparent'>
              
            </textarea>

              <div className='flex justify-between items-center px-4 pb-2'>
                <div className='text-lg flex gap-4 items-center'>
                  <p className='text-xl cursor-pointer'><IoMdNotificationsOutline/> </p>
                  <p className='cursor-pointer'><GiCircleClaws/> </p>
                  <p className='cursor-pointer'><GrMultimedia/> </p>
                </div>
                <button onClick={addTodo} className='px-3 py-2 rounded-md text-[13px] font-semibold bg-[#cdedd2] text-green-700'>ADD TASK</button>
            </div>
        </div>

        {/* Todos  */}
        <div className='mt-5 flex flex-col gap-4'>


          {

            todos?.length === 0 ? <div className='text-2xl font-semibold text-center'>No Todos Here</div>:
            todos?.map((todo)=>{
              return  <>{todo.completed === false && <div key={todo?.id} className='flex justify-between items-center pb-4 border-b'>
                        <div className='flex gap-4 items-center'>
                          <input type="checkbox" value={false} onClick={()=>toggleTodo(todo?.id)} className='w-4 h-4 cursor-pointer' />
                          <p className={`${todo.completed ? "line-through" : ""} `}>{todo?.task}</p>
                        </div>

                        <div className='text-2xl flex gap-6'>
                          <p onClick={()=>deleteTodo(todo?.id)} className='cursor-pointer'><AiOutlineDelete/></p>
                          <p className='cursor-pointer' onClick={()=>importantTodo(todo.id)}>{!todo.important ? <MdOutlineStarOutline/> : <MdOutlineStarPurple500/>}</p>
                        </div>
                      </div>}</>
            })
          }

        </div>

        {/* completed  */}
        <div className='mt-3 flex flex-col gap-4'>

            <p className='text-lg font-semibold'>Completed</p>


            {

              todos?.map((todo)=>{
                return  <>{todo.completed === true && <div key={todo?.id} className='flex justify-between items-center pb-4 border-b'>
                          <div className='flex gap-3 items-center'>
                            <img onClick={()=>toggleTodo(todo?.id)} src={check}alt="" width={20} className='cursor-pointer' />
                            <p className={`${todo.completed ? "line-through" : ""} `}>{todo?.task}</p>
                          </div>

                          <div className='text-2xl flex gap-6'>
                            <p onClick={()=>deleteTodo(todo?.id)} className='cursor-pointer'><AiOutlineDelete/></p>
                            <p className='cursor-pointer'>{!todo.important ? <MdOutlineStarOutline/> : <MdOutlineStarPurple500/>}</p>
                          </div>
                        </div>}</>
              })
              }


        </div>
    </div>
  )
}

export default Mainbar
