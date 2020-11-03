import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

//This is a custom Modal element using bulma's css
const Modal = ({deleteHandler, setTodos, todo, todos,children, closeModal, modalState, title }) => {

    const [inputTitle, setinputTitle] = useState(title);

    const editTextHandlerLocal = (e) => {
        setinputTitle(e.target.value)
    }

    const editTextHandler = () => {
        setTodos(todos.map(item=>{
            if(item.id === todo.id){
                return {
                    ...item, text: inputTitle
                }   
            }
            return item
        }))
    }

    useEffect(()=>{
        editTextHandler()
    },[modalState])

    if(!modalState) {
        return null;
      }

    return(
      <div className="modal is-active">
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <input onChange={editTextHandlerLocal} value={inputTitle} className="input is-primary px-2" type="text" placeholder="Goal title"/>
            <button className="button" onClick={closeModal} >Close</button>
          </header>
          <section className="modal-card-body">
            <div className="content">
              {children}
            </div>
          </section>
          <footer className="modal-card-foot">
            <button onClick={deleteHandler} className="button trash-btn is-small"> 
                          <i className="fas fa-trash"> Delete Goal</i>
            </button>
          </footer>
        </div>
      </div>
    );
  }
  
  Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string,
    todo: PropTypes.object,
    todos: PropTypes.array,
    setTodos: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired
  }


  export default Modal