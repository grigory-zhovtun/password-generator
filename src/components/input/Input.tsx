import React, {ClipboardEvent} from 'react';
import TextField from '@mui/material/TextField';

type InputPropsType = {
    newValue: string
}

const Input = ({ newValue }: InputPropsType) => {

    const copyHandler = (e: ClipboardEvent<HTMLDivElement>) => {
        const selectedText = window.getSelection()?.toString();
        if (selectedText) {
          e.clipboardData?.setData('text/plain', selectedText);
        }
        console.log(selectedText)
    }
    return (
        <div>
            <TextField
                sx={{
                    width: "400px",
                    marginBottom: "20px"
                }}
                id="outlined-multiline-static"
                multiline
                rows={6}
                defaultValue={newValue}
                onCopy={copyHandler}
            />
        </div>
    );
};

export default Input;