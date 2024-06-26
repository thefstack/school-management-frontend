import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddStudent = () => {
  return (
    <Wrapper>
      <form action="">
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="DOB (dd/mm/yyyy)"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <FormControl>
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
          id="outlined-basic"
          label="Father Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Mother Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Guardian Name"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Alternate Phone Number"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <FormControl fullWidth>
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

        <FormControl fullWidth>
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
          id="outlined-basic"
          label="Village"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Pincode"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Landmark"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <TextField
          id="outlined-basic"
          label="Aadhar"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
        />

      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AddStudent;
