import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';



const TodoList = () => {

    const userValue = useContext(TodoContext);
    const [ userTodos, addUserTodos ] = useState([]);
    addUserTodos(...userValue);

    const renderList = (userTodos) => {
        if (userTodos) {
            return userTodos.map(e => {
                return (
                    <div className='ui compact segment'>
                        <p>{e}</p>
                    </div>
                )
            });
        } else {
            return null;
        }
    }

    console.log(userValue);


    return (
        <div>
            {renderList()}
        </div>
    )
}

export default TodoList;