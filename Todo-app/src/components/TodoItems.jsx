import './Css/TodoItems.css'
import accept from './Assets/accept.png'
import close from './Assets/close.png'
import dryClean from './Assets/dryClean.png'



const TodoItems = (props) => {
  const remove = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((todo) => todo.no !== no)
    setTodos(data);
  }
  const {no, display, text, setTodos} = props
  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"))
    for(let i = 0; i<data.length; i++){
      if(data[i].no === no){
        if(data[i].display===""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break
      }
    }
    setTodos(data)
  
  }
  return (
    <div className='todo-items'>
        <div className={`todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
           {display ===""? <img className='unchecked' src={dryClean} alt="" />:<img className='unchecked' src={accept} alt="" />}
            <div className="todo-items-text">{text}</div>
       </div>
       <img onClick={()=>{remove(no)}} className='cross' src={close} alt="" />
    </div>
  )
}

export default TodoItems