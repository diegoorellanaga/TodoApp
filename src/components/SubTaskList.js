import React from "react"
import SubTask from './SubTask'

const SubTaskList = ({modalState, setSubTasks, subTasks, filteredSubTasks}) => {

    /*
      List of Subtasks belonging to a Goal.
    */

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredSubTasks.map(subTask => {
              return  <SubTask modalState= {modalState} subTask={subTask} subTasks={subTasks} setSubTasks={setSubTasks} text={subTask.text} key={subTask.id}/>
            })}
            </ul>
      </div>
    )
}

export default SubTaskList