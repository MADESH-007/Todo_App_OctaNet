import { useState } from 'react'
import './Css/Todo.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import TodoItems from './TodoItems'
import tickMark from './Assets/tickMark.png'

let count = 0 
const Todo = () => {
    const [todos,setTodos] = useState([])
    const inputRef = useRef(null)
    const add = ()=>{
        if(inputRef.current.value !== ""){
        count = count + 1
        setTodos([...todos,{no:count, text:inputRef.current.value, display:""}])
        inputRef.current.value = ""
        localStorage.setItem("todos_count", count)
        }
        else{
            alert("Add some text to the task field")
        }

    }
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")))
        count = localStorage.getItem("todos_count");
    }, [])
    useEffect(()=>{
        setTimeout(() =>{
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos))
        },100);
    },[todos])
  return (
    <div className='todo'>
        <div className='head-holder'><h1 className='todo-header'>Todo</h1> <img className="icon" height="70" width="70" src={tickMark}/></div>
        <div className='todo-add'>
            <input ref={inputRef} type="text" placeholder='Wake up @ 5.00 AM' className='todo-input'/>
            <div onClick={()=>{add()}} className="todo-add-btn">
                Add
            </div>
        </div>
        <div className="todo-list">
                {todos.map((item,index)=>{
                    return <TodoItems setTodos ={setTodos} key = {index} no = {item.no} display = {item.display} text = {item.text}/>
                })}
            </div>
    </div>
  )
}


export default Todo