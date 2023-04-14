import React, { useState } from 'react';

type LengthPropsType = {
    len: string
    onChangeHandler: (value: string) =>void
}

const Length = ({len, onChangeHandler}: LengthPropsType) => {

    return (
        <div>
            <input 
                type="number"
                value={len}
                onChange={(e)=>onChangeHandler(e.currentTarget.value)}
            />
        </div>
    );
};

export default Length;