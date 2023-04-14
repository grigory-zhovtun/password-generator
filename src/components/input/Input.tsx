import React from 'react';

type InputPropsType = {
    newValue: string
}

const Input = ({newValue}: InputPropsType) => {
    return (
        <div>
            <input 
                type='text' 
                value={newValue}            
            />
        </div>
    );
};

export default Input;