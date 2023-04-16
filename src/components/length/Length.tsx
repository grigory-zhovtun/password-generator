import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

type LengthPropsType = {
    len: number
    onChangeHandler: (value: number) => void
}

const Input = styled(MuiInput)`
  width: 42px;
`;

const Length = ({ len, onChangeHandler }: LengthPropsType) => {

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            onChangeHandler(newValue);
        }
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(+event.currentTarget.value)
    };


    return (
        <Grid container spacing={1}>
            <Grid xs={10}>
                <Slider
                    sx={{width: "300px"}}
                    value={typeof len === 'number' ? len : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    max={256}
                />
             </Grid>
             <Grid xs={2}>
                <Input
                    value={len}
                    size="small"
                    onChange={handleInputChange}
                    inputProps={{
                        step: 1,
                        min: 5,
                        max: 256,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
        </Grid>
    )
};

export default Length;  