import React from 'react'
import styled from "styled-components"
import "../common.css"
import ImageCrousel from '../components/ImageCrousel'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Wrapper>
      <div className="carouselCont">
      <ImageCrousel/>
        <h1 className='schoolName'>R S Memorial School</h1>
      </div>
      <Link to={"/adminlogin"} className="loginLink">Login</Link>
      <div className="infoCont">
        <div className="mission">
          <h2>Our Mission</h2>
          <li>Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated</li>
          <li>We believe that a happy child is a successful one. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued.</li>
          <li>Our focus is to provide a stimulating early learning and child care experience which promotes each child’s social/emotional, physical and cognitive development.</li>
          <li>Our school empowers all students to embrace learning, achieve their personal best and build their emotional, social and physical well-being.</li>
        </div>
        <div className="new-info">
          <h2>News / Informations</h2>
          <Link className='li' to={"/"}>Lorem ipsum dolor sit amet.</Link>
          <Link className="li" to={"/"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus qui at illo obcaecati assumenda?</Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
display:flex;
justify-content:center;
align-items:center;
width:100%;
flex-direction:column;
gap:30px;

.infoCont{
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    margin-bottom: 80px;
}
.infoCont .mission{
    background-color: rgba(255, 255, 255, 0.356);
    width: 40%;
    min-height: 300px;
    max-width: 500px;
    min-width: 300px;
    border-radius: 10px;
    padding: 10px 20px;
}
.new-info{
    background-color: rgba(255, 255, 255, 0.356);
    width: 40%;
    height: 400px;
    max-width: 500px;
    min-width: 300px;
    border-radius: 10px;
    padding: 10px 20px;
}
.infoCont .mission{
    color: #fff;
    text-align: center;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;


    h2{
        color: #000;
        font-size: 2.5rem;
    }
    li:last-child{
        margin-bottom: 20px;
    }
}
.new-info{
    color: #fff;
    text-align: center;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;

    .li{
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        
    }
    .li:hover{
        color: rgb(0, 0, 168);
    }
    h2{
        color:#000;
    }
}
.carouselCont{
    position: relative;
}
.schoolName{
 position: absolute;
top: 0;
left: 0;
 width: 100%;
 height: 100%;
 padding: 30px;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 color: #fff;
 font-size: 5vw;
 z-index: 5;
 background-color: rgba(0, 0, 0, 0.522);
 
}

.loginLink{
    position: fixed;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.484);
    top: 100px;
    right:-10%;
    width: 200px;
    font-size: 1.6rem;
    height: 30px;
    padding: 30px;
    border-radius: 15px 0 0 15px;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #fff;
    z-index: 999;
    transition: 0.8s;
    font-weight: 500;
    animation: leftright infinite linear 3s;
}
@keyframes leftright {
    0%{
        transform: translateX(-10%);
    }
    50%{
        transform: translateX(5%);
    }
    100%{
        transform: translateX(-10%);
    }

}
.loginLink:hover{
    background-color: rgb(255, 255, 255);
    color:#000;
    animation: none;
}
@media(min-width:1000px){
  .loginLink{
    right:-5%;
  }
}


@media(max-width:700px){
    .infoCont{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .infoCont .mission, .new-info{
        width:80%;
    }
}
@media(max-width:380px){
    .infoCont .mission, .new-info{
        min-width: 100px;
    }
}

`;

export default Home
