import React,{useState, useEffect} from 'react'
import "../common.css"
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const AdminDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(0);
    const [isMenuDisplay, setIsMenuDisplay] = useState(0);

  useEffect(()=>{
    handleResize();
  },[])
  const handleResize=()=>{
    if(window.innerWidth<=700){
      setIsMenuOpen(true)
      document.querySelector(".menu").style.display="none";
      document.getElementById("menuIcon").style.display="flex";
      document.getElementById("openMenu").style.display="flex";
    }
    else{
      setIsMenuOpen(false)
      document.querySelector(".menu").style.display="flex";
      document.getElementById("menuIcon").style.display="none";
      document.getElementById("openMenu").style.display="none";
    }
  }
    window.addEventListener('resize',handleResize);

    const menuTransform=()=>{
        if(isMenuDisplay===true){
            setIsMenuDisplay(!isMenuDisplay);
            document.getElementById("openMenu").style.transform = "translateX(0)";
            
        }
        else{
            setIsMenuDisplay(!isMenuDisplay)
            document.getElementById("openMenu").style.transform = "translateX(-100%)";
            
        }

    }

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsMenuDisplay(!isMenuDisplay);
      menuTransform();
    };


  return (
    <Wrapper>
      <div className="headerCont">
        <h3>Admin</h3>
        <Link className='button'>Logout</Link>
      </div>
      
      
      <div className="outletCont">
        <div className="menu">
        <nav>
            <Link className='link' to="">Dashboard</Link>
            <Link className='link' to="">Teacher</Link>
            <Link className='link' to="">Student</Link>
            <Link className='link' to="">Payment</Link>
            <Link className='link' to="">Search</Link>
            <Link className='link' to="">Report</Link>
        </nav>
        </div>
        <div id="openMenu">
        <nav>
            <Link className='link' to="">Dashboard</Link>
            <Link className='link' to="">Teacher</Link>
            <Link className='link' to="">Student</Link>
            <Link className='link' to="">Payment</Link>
            <Link className='link' to="">Search</Link>
            <Link className='link' to="">Report</Link>
        </nav>
        {isMenuOpen && <ArrowBackIosIcon onClick={toggleMenu} className='closeMenu' style={{fontSize:"2.5rem"}}/>}
        </div>
        <MenuBookIcon id='menuIcon' style={{fontSize:"2.5rem"}} onClick={toggleMenu}/>
      <Outlet className="outlet"/>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
flex-direction:column;
flex-wrap:wrap;
width:100%;
position:relative;


.headerCont{
    height: 50px;
    background-color: rgba(0, 0, 0, 0.645);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;

    h3{
        flex:1;
        display: flex;
        justify-content: center;
    }
    .button{
        flex:1;
        position: absolute;
        right: 5%;
        text-decoration: none;
        color: #fff;
        background-color: rgba(241, 241, 241, 0.3);
        padding: 5px 15px;
        border-radius: 10px;
        transition: 0.6s;
        font-weight: 700;
        cursor: pointer;
    }
    .button:hover{
        background-color: #fff;
        color: #000;
    }

}
@media(max-width:550px){
    .headerCont{
        h3{
            font-size: 0.8rem;
        }
        .button{
            font-size: 0.8rem;
        }
    }
}
@media(max-width:400px){
    .headerCont{
        h3{
            justify-content: flex-start;
            margin-left: 40%;
        }
        .button{
            font-size: 0.5rem;
        }
    }
}

.menu{
    display: flex;
    width: fit-content;
    height: 100%;
    position: relative;

    nav{
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.659);
        width: 200px;
        gap: 15px;
        height: 100%;
        min-height: 100vh;

        .link{
            text-decoration: none;
            color: #ffffffb1;
        }
        .link:hover{
            color: #fff;
        }
    }
}
#openMenu{
    display: flex;
    width: fit-content;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);

    nav{
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.659);
        width: 200px;
        gap: 15px;
        height: 100%;
        min-height: 100vh;
        

        .link{
            text-decoration: none;
            color: #ffffffb1;
        }
        .link:hover{
            color: #fff;
        }
    }

}
.closeMenu{
    position: absolute;
    color: #ffffffbb;
    right: 0;
    top: 10px;
    transform: translateY(50%);
    transition: transform 0.3s ease;
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
    -ms-transform: translateX(50%);
    -o-transform: translateX(50%);
    cursor: pointer;
    padding: 5px;
}
.closeMenu:hover{
    color: #fff;
}
#menuIcon{
    position: absolute;
    top:5px;
    left: 20px;
    color: #fff;
    padding: 5px;
    transition: 0.6s;
}
.outletCont{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
}

`;

export default AdminDashboard
