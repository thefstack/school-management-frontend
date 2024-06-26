import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const AdminAttendance = () => {
  return (
    <Wrapper>
      <div className="nav-link-cont">
        <nav className='nav'>
          <Link className='link' to="/admin/attendance/add">Add Attendance</Link>
          <Link className='link' to="/admin/attendance/search">Search Attendance</Link>
          <Link className='link' to="/admin/attendance/update">Update Attendance</Link>
          <Link className='link' to="/admin/attendance/remove">Remove Attendance</Link>
        </nav>
      </div>
      <Outlet/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
height:100%;
display:flex;

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

export default AdminAttendance
