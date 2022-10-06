import { useState } from 'react';

function useInput (initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange (e) {
        e ? setValue(e.target.value) : setValue('');

    }
    
    return {
        value,
        onChange: handleChange,

    };
}

export default useInput;