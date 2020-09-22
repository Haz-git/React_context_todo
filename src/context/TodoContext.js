import React from 'react';

const contextObject = React.createContext();

export default contextObject;

//Creation of the Context Object: Acts as the 'Pipe' between the SubmitTodo and TodoList -- Normally a callback function could be passed from App to retrieve state information from SubmitTodo's state. Then, that information could be passed from App to TodoList.