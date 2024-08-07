import React from 'react'
import styled from 'styled-components';
import { Link} from 'react-router-dom';
import AddSubject from './Add/AddSubject';

const AdminSubject = () => {
  return (
    <Wrapper>
      <div className="nav-link-cont">
        <nav className='nav'>
          <Link className='link' to="/admin/subject/add">Add Subject</Link>
          <Link className='link' to="/admin/subject/search">Search Subject</Link>
          <Link className='link' to="/admin/subject/update">Update Subject</Link>
          <Link className='link' to="/admin/subject/remove">Remove Subject</Link>
        </nav>
      </div>
      <AddSubject/>
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

export default AdminSubject
