import React from "react"
import Todo from './Todo'

const TodoList = ({setTodos, todos, filteredTodos}) => {

/*
List of Goals.
*/

    return (
        <div className="">
              <ul className="todo-list">
              {filteredTodos.map(todo => {
               return  <Todo todo={todo} todos={todos} setTodos={setTodos} text={todo.text} key={todo.id}/>
               })}
              </ul>
        </div>
    )
}

export default TodoList