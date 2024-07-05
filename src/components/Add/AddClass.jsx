import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const AddSubject = () => {
  return (
    <Wrapper>
      <form className="form">
      <h1>Add Subject</h1>
        <TextField
            className="input"
          id="outlined-basic"
          label="Subject Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value="Hindu">Hindu</MenuItem>
            <MenuItem value="Muslim">Muslim</MenuItem>
            <MenuItem value="Sikh">Sikh</MenuItem>
            <MenuItem value="Jain">Jain</MenuItem>
            <MenuItem value="Buddhist">Buddhist</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="OBC">OBC</MenuItem>
            <MenuItem value="SC">SC</MenuItem>
            <MenuItem value="ST">ST</MenuItem>
            <MenuItem value="EWS">EWS</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Submit</Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
padding:50px;



.form{
    background-color: #FAD396;
    width:80%;
    max-width:500px;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:50px;
    gap:20px;
    border-radius: 10px;
    box-shadow: 5px 5px #EE7C20;

    h1{
        text-align: center;
    }
    .input{
        background-color: #FAE6D5;
        width:100%;
    }
    .input-radio{
        border-radius: 10px;
        overflow: hidden;
        background-color: #FAE6D5;
        padding: 5px 10px;
        display:flex;
        align-items: center;
        justify-content: center;
        width:100%
    }
    button{
      background:#EE7C20;
    }
}
@media(max-width:550px){
    padding:50px 20px;
    .form{
        width: 90%;
        padding:20px;
    }

}
@media(max-width:300px){
    padding:50px 10px;
    .form{
        h1{
            font-size: 1rem;
        }
    }
}
`;

export default AddSubject;
