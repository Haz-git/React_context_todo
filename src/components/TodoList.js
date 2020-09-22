import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';



const TodoList = ({handleDelete}) => {
    const userValue = useContext(TodoContext);
    //Using the useContext hook instead of TodoContext.consumer HOC wrapper to withdraw information from Context Object.


    const renderList = (userValue) => {
        //Rendering all elements retrieved from Context Object.
        //Passing handleDelete prop from SubmitTodo to an anonymous arrow function so it doesn't get called during initial render and every subsequent render.
        return userValue.map((e) => {
            return (
                <div key={e} className='ui compact segment'>
                    <p>{e}</p>
                    <button onClick={() => handleDelete(e)} className='ui button'>Complete</button>
                </div>
            )
        });
    }


    return (
        <div>
            <div>
                <h3>Your Todo List</h3>
            </div>
            {renderList(userValue)}
        </div>
    )
}

export default TodoList;