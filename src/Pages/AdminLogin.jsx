import React from 'react'
import styled from 'styled-components'
import "../common.css"
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <Wrapper>
      <div className="loginCont">
        <form action="" className='loginForm'>
            <h3>Admin Login</h3>
            <label htmlFor="adminId">User Id</label>
            <input name='adminId' id='adminId' type="text" placeholder='Admin Id'/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password'/>

            <Link className='button' to="/admin">Login</Link>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
justify-content:center;
align-items:center;
margin-top:100px;
width:100%;

.loginCont{
    display: flex;
    background-color: rgba(255, 255, 255, 0.315);
    min-width: 400px;
    width: 50%;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 5px 5px 10px #00000086;
}

.loginForm{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding: 50px 30px;

    h3{
        text-align: center;
    }
    

    label{
        margin-top: 15px;
        text-align: center;
        font-weight: 600;
    }
    input{
        padding: 5px 15px;
        font-size: 1rem;
        border: none;
        outline: none;
        border-radius: 10px;
        width: 120%;
        height: 40px;
    }
    
}
.button{
        margin-top: 30px;
        padding: 5px 20px;
        font-size: 1.2rem;
        border-radius: 10px;
        outline: none;
        border: none;
        transition: 0.6s;
        cursor: pointer;
        text-decoration:none;
        background:#fff;
        color:#000;
        font-weight:700;
    }
    .button:hover{
        background-color: #000000c4;
        color: #fff;
    }

@media(max-width:650px){
    .loginForm{
        input{
            width: 100%;
            padding: 5px 10px;
        }
    }
    .loginCont{
        min-width: 100px;
        width: 80%;
    }
}

@media(max-width:400px){
    .loginForm{
        input{
            font-size: 0.8rem;
        }
        h3{
            font-size: 1rem;
        }
        label{
            font-size: 0.9rem;
        }
        .button{
            font-size: 1rem;
        }
    }
    .loginCont{
        min-width: 100px;
        width: 80%;
    }
}
@media(max-width:300px){
    .loginForm{
        padding: 30px 10px;
    }
    .loginCont{
        width: 90%;
    }
}



`;

export default AdminLogin
