import React from 'react'
import '../styles/main.scss'

const Form = ({status, setStatus, inputText, setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        if(e.target.value.length>0){
            setInputText(e.target.value)
        }
    };

    //This is for the select functionality. Not necesary for now. 
    const statusHandler = (e) => {
        setStatus(e.target.value)
    };

    //Add New Todo object to the Todo List, The id creation needs improvement but it works for now.
    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText.length>0){
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random()*1000}
            ])
            setInputText("") //column is-half is-offset-one-quarter
        }
    }
    return(

        <form>
            <div className="columns has-margin-top-4 add-goal-input is-mobile">
                <div className="column is-half is-offset-one-quarter">
                    <div className="columns is-mobile">
                    <div className="column is-11 need-padding-right"> 
                        <input value={inputText} onChange={inputTextHandler} type="text" className="input" placeholder="+ Goal" />
                        </div> 
                        <div className="column is-1 need-padding-left">    
                        <button onClick={submitTodoHandler} className="button" type="submit">
                            {/* <i className="fas fa-plus-square"></i> */}
                            Add Goal
                        </button>
                        </div> 
                    </div>    

                    {/* <div className="column">
                        <div className="">
                            <select onChange={statusHandler} name="todos" className="select">
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="uncompleted">uncompleted</option>
                            </select>
                        </div>
                    </div> */}
                </div>
            </div>   
        </form>
    ) 
}

export default Form