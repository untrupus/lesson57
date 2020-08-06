import React from "react";

const Fields = props => {
    return (
        <p><input type="text"/> <input type="text"/> сом <button type="button" onClick={props.move}>Remove</button></p>
    )
}

export default Fields;