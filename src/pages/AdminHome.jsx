import React from 'react'
import styled from 'styled-components'
import {Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader';

const AdminHome = () => {

  return (
    <Wrapper>
      <div className="admin-home-cont">
        <div className='admin-header-component'><AdminHeader/></div>
        <Outlet/>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
width:100%;
position:relative;


.admin-home-cont{
    display: flex;
    width: 100%;
    height:"100%";
    flex-direction: row;
    
    .admin-header-component{
      position:sticky;
      top:0;
      height:100vh;
    }
}

`;

export default AdminHome;
