import React from "react";
import './RemoveButton.css'

function RemoveButton ({removeContact, id}) {
    return (
        <button className='removeButton' onClick={() => removeContact(id)}>Remove</button>

    )

}

export default RemoveButton;