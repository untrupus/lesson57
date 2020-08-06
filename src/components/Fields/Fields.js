import React from "react";

const Fields = props => {
    return (
        <p><input type="text" name="name" onChange={props.name}/> <input type="text" name="money"/> сом <button type="button" onClick={props.move}>Remove</button></p>
    )
}

export default Fields;