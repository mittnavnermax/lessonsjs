import React from "react";
import './Input.css'

function Input ({value, placeholder, onChange}) {
    return (
        <div className="input-form">
            <input
                onChange={onChange}
                value={value}
                type="text"
                placeholder={placeholder}
            />
        </div>

    )

} 

export default Input