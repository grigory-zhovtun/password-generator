import React, { ChangeEvent } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


type RadioPropsType = {
    onCheckedRadio: (id: string) => void
}

const RadioButton = ({ onCheckedRadio }: RadioPropsType) => {

    const onCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onCheckedRadio(e.currentTarget.value)
    }

    return (
        <div>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="easy"
                name="radio-buttons-group"
                onChange={onCheckedHandler}
                sx={{
                    width: "200px",
                    marginLeft: "20px"
                }}
            >
                <FormControlLabel value="easy" control={<Radio />} label="Only letters" />
                <FormControlLabel value="medium" control={<Radio />} label="Letters with numbers" />
                <FormControlLabel value="hard" control={<Radio />} label="All symbols" />
            </RadioGroup>
        </div>
    );
};

export default RadioButton;