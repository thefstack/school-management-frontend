import React, { useEffect } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useStudentContext } from "../../Context/studentContect";
import { Link } from "react-router-dom";

const AddStudent = (props) => {
  const {isLoading,setIsAdding,singleStudent}=useStudentContext()
  

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
      <form className="form">
        <h1>Student</h1>
        <TextField
          className="input"
          id="outlined-basic"
          label="Full Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="DOB (dd/mm/yyyy)"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <FormControl className="input-radio">
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            row="true"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <TextField
          className="input"
          id="outlined-basic"
          label="Father Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Mother Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Guardian Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Phone Number"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Alternate Phone Number"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Religion</InputLabel>
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
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
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

        <TextField
          className="input"
          id="outlined-basic"
          label="Village"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Pincode"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Landmark"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Aadhar"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Email"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <Button variant="contained">Submit</Button>
      </form>
      <Button 
      variant="contained" 
      className="back-btn">
        <Link to="/admin/student" style={{textDecoration:"none", color:"#fff"}}
        onClick={()=>{setIsAdding()}}
         >Back</Link>
      </Button>
    </Wrapper>
  );
  
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  overflow: scroll;
  position: relative;

  .back-btn {
    position: absolute;
    top: 0;
    right: 20px;
    background: #ee7c20;

    &:hover{
      background: #ee7c20;
    }
  }

  .form {
    background-color: #fad396;
    width: 80%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px #ee7c20;

    h1 {
      text-align: center;
    }
    .input {
      background-color: #fae6d5;
      width: 100%;
    }
    .input-radio {
      border-radius: 10px;
      overflow: hidden;
      background-color: #fae6d5;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    button {
      background: #ee7c20;
    }
  }
  @media (max-width: 550px) {
    padding: 50px 20px;
    .form {
      width: 90%;
      padding: 20px;
    }
  }
  @media (max-width: 300px) {
    padding: 50px 10px;
    .form {
      h1 {
        font-size: 1rem;
      }
    }
  }
`;

export default AddStudent;
