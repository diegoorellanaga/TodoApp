import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const eTrash = <FontAwesomeIcon icon={faTrash} />
const eEdit = <FontAwesomeIcon icon={faEdit} />
const eCheck = <FontAwesomeIcon icon={faCheck} />

const SubTask = ({modalState, text, subTask, subTasks, setSubTasks }) => {
/*
This is a Todo's Subtask
*/
    const deleteHandler = () => {
        setSubTasks(subTasks.filter(el => el.id !== subTask.id))
    };

    const completeHandler = () => {
        setSubTasks(subTasks.map(item=>{
            if(item.id === subTask.id){
                return {
                    ...item, completed: !item.completed
                }   
            }
            return item
            
        }))
    }

    const [inputTitle, setinputTitle] = useState(text);

    const [isDisabled, setIsDisabled] = useState(true);

    const editTextHandlerLocal = (e) => {
        setinputTitle(e.target.value)
    }

    const toggleDisabledness = () => {
        setIsDisabled(!isDisabled)
    }

    const editTextHandler = () => {
        setIsDisabled(true)
        setSubTasks(subTasks.map(item=>{
            if(item.id === subTask.id){
                return {
                    ...item, text: inputTitle
                }   
            }
            return item
        }))
    }

    return (
        <div className="columns is-vcentered is-mobile">
          <div className="column is-three-fifths is-5">
            <li className={`todo-item ${subTask.completed ? "completed":''}`}>
            <input onBlur={editTextHandler} onChange={editTextHandlerLocal} readOnly={isDisabled} className={`input is-small ${isDisabled ? "":'is-focused'} ${subTask.completed ? "is-success":''}`} value={inputTitle}></input>
            </li>
          </div>
          <div className="column is-1">
            <button onClick={completeHandler}  className={`button is-small ${subTask.completed ? "is-primary":''}`}> 
                {eCheck}
            </button>
          </div>
          <div className="column is-one-fifth is-1">
            <button onClick={toggleDisabledness} className="button is-small"> 
                {eEdit}
            </button>
          </div>  
          <div className="column is-one-fifth is-1">
            <button onClick={deleteHandler} className="button is-small"> 
                {eTrash}
            </button>
          </div>
      </div>
    )
}

export default SubTask