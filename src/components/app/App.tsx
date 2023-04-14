import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { passwordGenerator } from "../services/pass_generator";
import Length from "../length/Length";

const App = () => {

    // const newPassword = passwordGenerator(5)
    let [newPassword, setNewPassword] = useState('')
    let [val, setVal] = useState('')

    const generateHandler = () => {
        setNewPassword(passwordGenerator(Number(val), 'NUMBERS'))
    }

    const setNewVal = (value: string) => {
        setVal(value)
    }

    return (
        <div>
            <h1>Password Generator</h1>
            <Input newValue={newPassword}/>
            <Button callback={generateHandler}/>
            <Length len={val} onChangeHandler={setNewVal}/>
        </div>
    )
}

export default App;
