import './addMsgForm.css';
import React, { useRef } from 'react';
import { Button, TextField } from "@material-ui/core";
import AUTHORS from './constants';

export default function AddMsgForm({ submitHandler, authors }) {
    const [ msgVal, setMsgVal ] = React.useState("");
    const textAreaEl = useRef(null);

    const handlerMsgVal = (e) => {
        setMsgVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submitHandler) {
            if(msgVal !== "") {
                submitHandler(msgVal);
            }
            textAreaEl.current.focus();
            setMsgVal("");
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="addMsgForm">
          <TextField
            style={{ marginTop: "10px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            disabled
            defaultValue={ authors.ME }
            />
          <TextField
            id="outlined-multiline-static"
            label="Text"
            multiline
            rows={4}
            variant="outlined"
            value={ msgVal }
            onChange={ handlerMsgVal }
            autoFocus
            required
            ref={ textAreaEl }
            />
          <Button variant="outlined" color="default" type="submit">TO SEND</Button>
        </form>
    );
}