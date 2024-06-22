import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import schoolLogo from "../images/schoolLogo.png";
import "../common.css";
import { AnimatePresence, motion } from 'framer-motion';


const Header = () => {

    const [isVisible,setIsVisible]=useState(false);
    const [isSm,setIsSm]=useState(false);
    
    const transition3={
        duration:0.3,
    }
    
    const var1={
        initialNavMenuSm:{
            opacity:0,
            x:-200 
        },
        animate:{
            x:0,
            opacity:1
        },
        exit:{
            x:-200,
            opacity:0
        }
        
    }
    const var2={
        animate1:{
            y:-10,
            rotate:50,
            backgroundColor:"#fff"
        },
        animate2:{
            rotate:-50,
            y:10,
            backgroundColor:"#fff"
        },
        animate1back:{
            y:0,
            rotate:0,
            backgroundColor:"#000"
        },
        animate2back:{
            rotate:0,
            y:0,
            backgroundColor:"#000"
        },
        hide:{
            opacity:0
        },
        show:{
            opacity:1
        }
    }
    const var3={
        hide:{
            opacity:0,
            x:-10,
            
        },
        show:{
            opacity:1,
            x:0,
            
        }
    }

    window.addEventListener('resize',()=>{
        isSmFunc();
    })
    const isSmFunc=()=>{
        if(window.innerWidth<=768){
            setIsSm(true);
        }else{
            setIsSm(false);
            setIsVisible(false);
        }
    }

    useEffect(()=>{
        isSmFunc();
    })


  return (
    <Wrapper>
        <div className="leftHeader">
            <Link to="/" className="logo"><img src={schoolLogo} alt="failed to fetch logo" /></Link>
        <nav className="navList">
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3}  initial="hide" animate="show"><Link className='navLink' to="#">Home</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3}  initial="hide" animate="show"><Link className='navLink' to="#">About us</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3}  initial="hide" animate="show"><Link className='navLink' to="#">Admission</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3} initial="hide" animate="show"><Link className='navLink' to="#">Contact</Link></motion.div>
        </nav>
      </div>
      <Link className="loginLink">Login</Link>

      <AnimatePresence>
      {isVisible & isSm && (<motion.div 
        exit="exit"
       animate="animate"
      transition={transition3} 
      initial="initialNavMenuSm" 
      variants={var1} 
      className="navMenuSm">
        <nav className="navListSm">
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3}  initial="hide" animate="show"><Link className='navLink' to="#">Home</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3}  initial="hide" animate="show"><Link className='navLink' to="#">About us</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3}  initial="hide" animate="show"><Link className='navLink' to="#">Admission</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3} initial="hide" animate="show"><Link className='navLink' to="#">Contact</Link></motion.div>
            <motion.div whileHover={{scale:1.1,transition:{duration:0.2}}} whileTap={{scale:0.9}} variants={var3} animate=""><Link className="loginLink">Login</Link></motion.div>
        </nav>
      </motion.div>)}
      </AnimatePresence>

        {isSm && (<motion.div className='menuIcon' onClick={()=>setIsVisible(!isVisible)}>
            <motion.div variants={var2} className="line1" animate={isVisible ?"animate2":"animate2back"}></motion.div>
            <motion.div animate={!isVisible & isSm ?"show":"hide"} variants={var2}  className="line2"></motion.div>
            <motion.div variants={var2} animate={isVisible ?"animate1":"animate1back"} className="line3"></motion.div>
        </motion.div>)}
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content: space-between;
user-select:none;

.leftHeader{
    margin-left: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    min-height:60px;

    .logo{
        height: 60px;

        img{
            height: 100%;
        }
    }
    .navList{
        margin-left: 30px;
        display: flex;
        gap: 30px;

        .navLink{
            text-decoration: none;;
            color:#000;
            font-weight: 500;
            cursor: pointer;
        }
    }
}
.navMenuSm{
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    transform: translateX(-100%);
    .navListSm{
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: max-content;
        background-color: #000000dd;
        align-items: flex-start;
        padding: 50px 20px;
        min-height:100vh;
        .navLink{
            text-decoration: none;;
            color:#ffffffb4;
            font-weight: 500;
            cursor: pointer;

        }
        .navLink:hover{
            color:#fff
        }
        .loginLink{
            text-decoration: none;
            background-color: #fff;
            color: #000;
            padding: 8px 30px;
            font-weight: 500;
            letter-spacing: 1px;
            border-radius: 8px;
        }
}
}
.loginLink{
    margin-right: 30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    padding: 10px 30px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 8px;
    justify-content: flex-end;
}
@media(max-width:768px){
    .leftHeader{
        .navList{
            display: none;
        }
    }
    .loginLink{
        display: none;
    }
    .navListSm{
        .loginLink{
            display: flex;
        }
    }
}

.menuIcon{
    margin-right: 30px;
    cursor: pointer;
    width:30px;
    height: 20px;
    overflow: hidden;
    display: flex;;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index:10;

    .line1{
        width: 100%;
        height: 20%;
        background-color: black;
        border-radius: 15px;
        position: absolute;
        top: 0;

    }
    .line2{
        width: 100%;
        height: 20%;
        background-color: black;
        border-radius: 15px;
        position: absolute;
    }
    .line3{
        width: 100%;
        height: 20%;
        background-color: black;
        border-radius: 15px;
        position: absolute;
        bottom: 0;
    }
}

`;

export default Header
