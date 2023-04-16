import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { passwordGenerator } from "../services/pass_generator";
import Length from "../length/Length";
import RadioButton from "../radio/Radio";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const App = () => {

    // const newPassword = passwordGenerator(5)
    let [newPassword, setNewPassword] = useState('')
    let [val, setVal] = useState(5)
    let [radioID, setRadioID] = useState('easy')

    const generateHandler = () => {
        switch (radioID) {
            case 'easy':
                setNewPassword(passwordGenerator(Number(val), 'ABC'))
                break
            case 'medium':
                setNewPassword(passwordGenerator(Number(val), 'NUMBERS'))
                break
            case 'hard':
                setNewPassword(passwordGenerator(Number(val), 'SYMBOLS'))
                break
            default:
                console.log("Unknown type of password generator")
        }

    }

    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(newPassword);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    };

    const onCheckedHandler = (id: string) => {
        setRadioID(id)
    }

    const setNewVal = (value: number) => {
        setVal(value)
    }

    return (
        <Container maxWidth="sm">
            <h1>Password Generator</h1>
            <Box
                sx={{
                    display: "grid",
                    margin: '0 auto',
                    gridTemplateColumns: "repeat(3, 1fr)"
                }}
            >
                
                <Input newValue={newPassword} />
                <div>
                    <Button updateButton={true} copyButton={false} callback={generateHandler} />
                    <Button updateButton={false} copyButton={true} callback={copyToClipboard} />
                </div>
                
                <RadioButton onCheckedRadio={onCheckedHandler} />
                <Length len={val} onChangeHandler={setNewVal} />
            </Box>
            
        </Container>
    )
}

export default App;
