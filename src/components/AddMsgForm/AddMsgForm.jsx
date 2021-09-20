import './addMsgForm.css';
import React from 'react';
import { Button, TextField } from "@material-ui/core";

export default function AddMsgForm({ submitHandler, authors }) {
    const [ msgVal, setMsgVal ] = React.useState("");

    const handlerMsgVal = (e) => {
        setMsgVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submitHandler) {
            const msgField = document.querySelector("#outlined-multiline-static");

            if(msgField.value !== "") {
                submitHandler(msgVal);
            } else {
                msgField.error = true;
                msgField.helperText = "Значение не должно быть пустым!";
            }

            msgField.focus();
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
            rows={1}
            variant="outlined"
            value={ msgVal }
            onChange={ handlerMsgVal }
            autoFocus
            required
            />
          <Button variant="outlined" color="default" type="submit">TO SEND</Button>
        </form>
    );
}