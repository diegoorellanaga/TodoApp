import React from 'react'
//import Button from 'react-bulma-components/lib/components/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPlus} />

const SubTaskForm = ({status, setStatus, inputText, setInputText, subTasks, setSubTasks}) => {
    const inputTextHandler = (e) => {
        if(e.target.value.length>0){
            setInputText(e.target.value)
        }
    };

    const statusHandler = (e) => {
        console.log("select event",e.target.value)
        setStatus(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText.length>0){
            setSubTasks([
                ...subTasks, {text: inputText, completed: false, id: Math.random()*1000}
            ])
            setInputText("")
        }
    }
    return(
        <form>

            <div className="columns is-mobile">
              <div className="column is-three-fifths is-7">
                <input value={inputText} onChange={inputTextHandler} type="text" className="input" placeholder="+ Subtask"/>
              </div>
              <div className="column is-1">
                <button onClick={submitTodoHandler} type="submit" className="button">
                    {/* <i className="fas fa-plus-square"></i> */}
                    {element}
                </button>
              </div>
              {/* <div className="column ">
              <div className="select">
                  <select onChange={statusHandler} name="subTasks" className="filter-todo">
                      <option value="all">All</option>
                      <option value="completed">Completed</option>
                      <option value="uncompleted">uncompleted</option>
                  </select>
  
              </div>
              </div> */}
            </div>
        </form>
    ) 
}

export default SubTaskForm