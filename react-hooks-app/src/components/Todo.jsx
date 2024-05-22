import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if(newTodo.trim() === '') return; //don't add empty todos
        setTodos([...todos, newTodo]);
        setNewTodo(''); //clear input field
    };

    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        console.log(index);
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };
  return (
    <>
       <div>
        Todo List
        <input type="text" placeholder='Add a new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo} <button onClick={() => removeTodo(index)}>Remove</button></li>
            ))}
        </ul>
       </div>
    </>
  )
}

export default Todo