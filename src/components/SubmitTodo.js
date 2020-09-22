import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoContext from '../context/TodoContext';

const SubmitTodo = () => {

    const [ submitInput, setSubmitInput ] = useState('');
    const [ userInput, setUserInput ] = useState('');

    const handleOnChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', userInput);
        setSubmitInput(userInput);
        setUserInput('');
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
                    <TodoList />
                </TodoContext.Provider>
            </div>
        </div>
    )
}

export default SubmitTodo;