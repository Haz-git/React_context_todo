import React from 'react';
import SubmitTodo from './SubmitTodo';

const App = () => {
    return (
        <div className='ui container'>
            <h1>Welcome to Context Todo!</h1>
            <div>
                <SubmitTodo />
            </div>
        </div>
    )
}

export default App;