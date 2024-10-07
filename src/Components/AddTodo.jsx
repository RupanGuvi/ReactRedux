import React, { useState } from 'react';

const AddTodo = () => {

    const [input,setInput] = useState('')

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Enter A Todo..'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;