import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoContext from '../context/TodoContext';

const SubmitTodo = () => {

    //Creating useState Hooks for two states that manage initial user input and submitted user input (through ContextObject).
    const [ submitInput, setSubmitInput ] = useState([]);
    const [ userInput, setUserInput ] = useState('');

    const handleOnChange = (e) => {
        //Setting initial user state.
        setUserInput(e.target.value);
    }

    const handleOnSubmit = (e) => {
        //On submit = preventDefault, set array of submitInput to whatever is in old array, as well as new input.
        e.preventDefault();
        console.log('Submitted:', userInput);
        setSubmitInput(oldArray => [...oldArray, userInput]);
        setUserInput(''); //Erasing field information...
        console.log(submitInput);
    }


    const handleDelete = (name) => {
        //This is a callback function to be passed to TodoList for Todo-deletion.
        setSubmitInput(submitInput.filter(el => el !== name));
        //Basically, filter the submitted info array for the name of the todo that was added to remove it.
        //Small bug, the todolist todo's cannot have the same todo's. Chances that that input is rare, but something to consider that is not within the scope/meaning of this project...
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} className='ui form'>
                <div className='field'>
                    <input onChange={handleOnChange} type='text' placeholder='Add Your Todo Item...' value={userInput}></input>
                </div>
                <div>
                    <button type='submit' className='ui primary button'>Submit</button>
                    <button type='reset' className='ui negative button'>Delete</button>
                </div>
            </form>
            <div>
                <TodoContext.Provider value={submitInput}>
                    <TodoList handleDelete={handleDelete} />
                </TodoContext.Provider>
            </div>
        </div>
    )
}

export default SubmitTodo;