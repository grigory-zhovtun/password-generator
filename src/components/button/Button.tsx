import React from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type ButtonPropsType = {
    callback: ()=>void
    updateButton: boolean
    copyButton: boolean
}

const Button = ({callback, updateButton, copyButton}: ButtonPropsType) => {
    
    return (
        <>
            {updateButton  && <IconButton>
                <LoopIcon color="secondary"
                    fontSize="large" 
                    onClick={callback}></LoopIcon>
            </IconButton>}
            {copyButton  && <IconButton>
                <ContentCopyIcon color="secondary"
                    fontSize="large" 
                    onClick={callback}></ContentCopyIcon>
            </IconButton>}
        </>
        
    );
};

export default Button;