import React, { useState, useEffect } from 'react'
import SubTaskForm from './SubTaskForm'
import SubTaskList from './SubTaskList'

function SubTaskRoot({todoId, modalState, subTasks, setSubTasks, completeness, setCompleteness}) {
  const [inputText, setInputText] = useState("");
  //const [subTasks, setSubTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredSubTasks, setFilteredSubTasks] = useState([]);
  //const [completeness, setCompleteness] = useState(false);

  useEffect(()=>{
    filterHandler()
  },[status, subTasks])

  useEffect(()=>{
    setCompleteness(true)
    subTasks.forEach(stask => {
        if(stask.completed===false){
            setCompleteness(false)
        }
    });

  },[subTasks])

  useEffect(()=>{
    saveLocalSubTasks()
  },[subTasks])  

  const saveLocalSubTasks = () => {
    if (localStorage.getItem("subTasks-"+todoId) === null){
      localStorage.setItem("subTasks-"+todoId, JSON.stringify([]))
    }else {
      localStorage.setItem("subTasks-"+todoId, JSON.stringify(subTasks))
    }
  }

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredSubTasks(subTasks.filter(subTask=> subTask.completed === true))
        break;
      case 'uncompleted':  
        setFilteredSubTasks(subTasks.filter(subTask=> subTask.completed === false))
        break;
      case 'all':  
        setFilteredSubTasks(subTasks)
        break;
    }
  }

  return (
    <div className="App">
      <SubTaskForm 
        status={status} 
        setStatus={setStatus} 
        inputText={inputText} 
        subTasks={subTasks} 
        setSubTasks={setSubTasks} 
        setInputText={setInputText}
      />
      <SubTaskList modalState={modalState} filteredSubTasks={filteredSubTasks} setSubTasks={setSubTasks} subTasks={subTasks}/>
    </div>
  );
}

export default SubTaskRoot;
