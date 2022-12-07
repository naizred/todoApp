import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
//import { v4 as uuidv4 } from 'uuid';

//const LOCAL_STORAGE_KEY = 'todoApp.todos'

let counter = 0

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

/*    useEffect(()=> */
    const storedTodos = JSON.parse(localStorage.getItem("something"));
    if(storedTodos) {setTodos(storedTodos)}
  

  useEffect(()=>{
    console.log(todos);
    localStorage.setItem("something", JSON.stringify(todos))
  }, [todos]) 


  function handleAddTodo(event){
   
    const name = todoNameRef.current.value
    if (name === ''){return}
    setTodos(prevTodos=>{
      return [...prevTodos, {id:counter++, name:name, completed:false}];
    })
    todoNameRef.current.value = null
  }

  return (
    <>
  <TodoList todos = {todos}/>
  <input ref={todoNameRef} type="text" />
  <button onClick={handleAddTodo}>Add Todo</button>
  <button>Clear Todo</button>
  <div>0 left to do</div>
  </>
  );
}

export default App;
