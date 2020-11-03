import SubTaskRoot from './SubTaskRoot'
import React, { useState, useEffect } from 'react'
import Modal from '../views/Modal'
import '../styles/main.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCheck} />

const Todo = ({ text, todo, todos, setTodos }) => {

    const [completeness, setCompleteness] = useState(false);
    //const [subTasks, setSubTasks] = useState([]);
    const [subTasks, setSubTasks] = useState([]);
    const [numberSubTasks, setNumberSubTasks] = useState(0);
    const [showModal, setshowModal] = useState(false);


    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const closeModalHandler = () => {
        setshowModal(false)
    }

    const openModalHandler = () => {
        setshowModal(true)
    }

    const completeHandler = () => {
        setTodos(todos.map(item=>{
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }   
            }
            return item
        }))
    }
    
    let SubTaskDot = null
    if(subTasks.length>0){

        SubTaskDot = 
         <div className="subtask-flag-father">
        <div className="subtask-flag">
            <span class="dot-r">S-{subTasks.length}</span>
        </div>
     </div> 
    }

    useEffect(()=>{
        setNumberSubTasks(subTasks.length)
      },[subTasks])

    useEffect(()=>{

      setCompleteness(true)
      subTasks.forEach(stask => {
          if(stask.completed===false){
              setCompleteness(false)
          }
      });
    },[subTasks])  


    useEffect(()=>{
      getLocalSubTasks()
    },[])

    const getLocalSubTasks = () => {
      if (localStorage.getItem("subTasks-"+todo.id) === null){
        setSubTasks([])
      }else {
        setSubTasks(JSON.parse(localStorage.getItem("subTasks-"+todo.id)))
      }
    }

    return (
        <div>
          <div class="task-container columns is-multiline is-mobile">
            <div class="column is-third is-offset-one-quarter">
                <div className="columns is-vcentered is-mobile">
                    <div className="column is-three-fifths" onClick={openModalHandler}>
                      <div className={`card ${(completeness && numberSubTasks>0) || (todo.completed && numberSubTasks===0) ? "column-todo":''}`}>
                        <header class="card-header is-vcentered">
                          <p class="card-header-title">
                            <span className={`todo-item ${(completeness && numberSubTasks>0) || (todo.completed && numberSubTasks===0) ? "completed":''}`}>{text}</span>
                          </p>
                          {SubTaskDot} 
                        </header>                      
                      </div>
                    </div>  
                    <div className="column is-1">    
                      <button onClick={completeHandler}  className={`button is-small ${(completeness && numberSubTasks>0) || (todo.completed && numberSubTasks===0) ? "is-success":''}`}> 
                      {element}
                          <i className="fas fa-check"> {(completeness && numberSubTasks>0) || (todo.completed && numberSubTasks===0) ? "Complete":''}</i>
                      </button>
                    </div>
                </div> 
            </div>                  
          </div>         
          <Modal 
            closeModal={closeModalHandler} 
            modalState={showModal} 
            title={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            deleteHandler={deleteHandler}
          >
          <SubTaskRoot todoId={todo.id} modalState={showModal} subTasks={subTasks} setSubTasks={setSubTasks} setCompleteness={setCompleteness}/>  
         </Modal>


      </div>
    )
}

export default Todo