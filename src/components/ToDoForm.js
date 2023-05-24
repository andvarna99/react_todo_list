import React, {useState, useEffect, useRef} from 'react';


function ToDoForm({onSubmit, ...props}){
    //sets the value of the to-do so you don't have to retype
    const [ input , setInput ] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }
    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update a to-do"
                        value={input}
                        name="text"
                        className="toDoInput edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="toDoBtn edit">Update to-do</button>
                </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a to-do"
                            value={input}
                            name="text"
                            className="toDoInput"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="toDoBtn">Add to-do</button>
                    </>
            )}
        </form>
    )
}

export default ToDoForm