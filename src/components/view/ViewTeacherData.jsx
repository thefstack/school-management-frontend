import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useStudentContext } from "../../Context/studentContect";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewTeacher = () => {
  const navigate=useNavigate();
  const {isLoading, getTeacherById,singleTeacher}=useTeacherContext();
  const {id}=useParams();
  const [editable,setEditable]=useState(false);
  const [teacherData, setTeacherData] = useState({});

  useEffect(()=>{
    getTeacherById(id);
  },[])  

  useEffect(()=>{
    setTeacherData(singleStudent);
  },[singleStudent])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
      <form className="form">
        <h1>Teacher</h1>
        {Object.entries(singleStudent).map(([key,value])=>(
          <TextField
          key={key}
          name={key}
          className="input"
          label={key || ""}
          variant="filled"
          size="small"
          value={studentData[key] || ""}
          onChange={handleChange}
          style={{ background: "#FAE6D5" }}
          required
          InputProps={{readOnly:!editable}}
        />
        ))}
        
        <div className="btn-cont">
          {editable ? <Button variant="contained">Save</Button> : <Button variant="contained" onClick={()=>(setEditable(true))}>Edit</Button>}
        </div>
      </form>
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
    background: #ee7c20;

    &:hover {
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
    
    .btn-cont{
      display:flex;
      gap:20px;

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

export default ViewTeacher;
