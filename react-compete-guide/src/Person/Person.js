import React from "react";

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            {/* Two way bind */}
            <input type="text" onChange={props.input} value={props.name}></input>
        </div>
    )
};

export default Person;