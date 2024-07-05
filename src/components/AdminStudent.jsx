import React from 'react';
import styled from 'styled-components';
import ListView from './ListView';
import { useStudentContext } from '../Context/studentContect';
import { Outlet } from 'react-router-dom';


const AdminStudent = () => {
  const {isLoading,studentData,isAdding}=useStudentContext();
  
  if(isLoading){
    return (<>Null</>)
  }
  return (
    <Wrapper>
      <ListView data={studentData}/>
      <Outlet/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
position:relative;
overflow:scroll;

`;

export default AdminStudent
