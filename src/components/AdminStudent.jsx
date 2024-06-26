import React from 'react'
import { Link, } from 'react-router-dom';
import styled from 'styled-components';
import "../common.css"
import AddStudent from "./students/AddStudent"

const AdminStudent = () => {
  
  return (
    <Wrapper>
      <div className="nav-link-cont">
        <nav className='nav'>
          <Link className='link' to="/admin/student/add">Add Student</Link>
          <Link className='link' to="/admin/student/search">Search Student</Link>
          <Link className='link' to="/admin/student/update">Update Student</Link>
          <Link className='link' to="/admin/student/remove">Remove Student</Link>
        </nav>
      </div>
      <AddStudent/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;

.nav-link-cont{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    gap:30px;

    .nav{
      width: 100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      align-items: center;
      gap:20px;
      flex-direction: column;
      padding:10px 20px;

      .link{
        text-decoration: none;
        color: #000;
        background-color: #eeb58695;
        padding:5px 15px;
        border-radius: 15px;
      }
    }
}

@media(max-width:300px){
    .nav-link-cont{
        .nav{
            padding:10px;
            .link{
                font-size: 0.7rem;
            }
        }
    }
}


`;

export default AdminStudent
