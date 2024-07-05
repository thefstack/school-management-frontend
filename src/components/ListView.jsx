import React from 'react'
import styled from 'styled-components';
import { useStudentContext } from '../Context/studentContect';
import { Link } from 'react-router-dom';

const ListView = (props) => {
  let {setIsAdding,setIsView}=useStudentContext();

    
  return (
    <Wrapper>
      <div className="header">
        <input type="text" placeholder='Search'/>
        <button onClick={()=>{setIsAdding()}} className='add-btn'>Add</button>
      </div>
      <div className="data-display">
        <table>
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Village</th>
          </tr>
          {props.data.map((student)=>(
            <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.father_name}</td>
            <td>{student.mother_name}</td>
            <td>{student.village}</td>
            <td><Link to={`/admin/student/${student.id}`} onClick={()=>{setIsView()}} className='view-btn'>View</Link></td>
          </tr>
          ))}
        </table>
      </div>
    </Wrapper>
  )
}


const Wrapper=styled.div`
width:100%;
padding:20px;
display:flex;
flex-direction:column;
gap:10px;

.header{
    width: 100%;
    display:flex;
    gap:30px;
    input{
        padding:5px 10px;
        border: none;
        outline: none;
        border: 1px solid #EE7C20;
        border-radius: 5px;
    }
    .add-btn{
      padding: 5px 15px;
                outline: none;
                border: none;
                background-color: #EE7C20;
                border-radius: 10px;
                display: flex;
                align-items: center;
                height: 30px;
                color: #fff;
                justify-content: center;
                transition: 0.5s;
            }
            .add-btn:hover{
                background: #ffd4b1;
                color:#000
            }
}
.data-display{
    width: 100%;
    overflow-x: scroll;
    min-height: 60vh;
    border: 1px solid;

    table{
        display: flex;
        width: 100%;
        flex-direction: column;
        gap:10px;

        tr{
            width: max-content;
            display:grid;
            grid-template-columns: repeat(6,150px);
            gap: 10px;
            padding: 5px;
            text-align: center;
            border-bottom: 1px solid;

            td,td{
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .view-btn{
                padding: 5px 15px;
                outline: none;
                border: none;
                background-color: #EE7C20;
                border-radius: 10px;
                display: flex;
                align-items: center;
                height: 30px;
                color: #fff;
                justify-content: center;
                transition: 0.5s;
                text-decoration:none;
            }
            .view-btn:hover{
                background: #ffd4b1;
                color:#000
            }
        }
    }
}

`;
export default ListView
