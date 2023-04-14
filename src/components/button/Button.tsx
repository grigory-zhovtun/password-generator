import React from 'react';

type ButtonPropsType = {
    callback: ()=>void
}

const Button = ({callback}: ButtonPropsType) => {
    return (
        <div>
            <button onClick={callback}>Generate</button>
        </div>
    );
};

export default Button;