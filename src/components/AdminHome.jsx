import React from 'react'
import styled from 'styled-components'
import InfoContainer from './InfoContainer';
import InfoGraphContainer from './InfoGraphContainer';


const AdminHome = () => {
  return (
    <Wrapper>
      <div className="cont">
        <div className="info-stats-cont">
            <InfoContainer  totalTeachers="10" presentTeachers="8"/>
            <InfoContainer totalStudents="150" presentStudents="135"/>
            <InfoContainer totalCashRecievedToday="6000"/>
        </div>
        <div className="info-graph-cont">
            <InfoGraphContainer/>
            <InfoGraphContainer/>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
flex-wrap:wrap;
flex-direction:column;
width:100%;

.cont{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 30px;
    gap: 50px;
    flex-wrap: wrap;
    padding: 20px;
}
.info-stats-cont{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-evenly;
    padding: 30px 10px;
    box-shadow: 10px 10px 10px 10px #bcb9b9;
    border-radius: 20px;
}
.info-graph-cont{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-evenly;
    justify-content: space-evenly;
    padding: 30px 10px;
    box-shadow: 10px 10px 10px 10px #bcb9b9;
    border-radius: 20px;
}
@media(max-width:200px){
    .cont{
    padding:10px;
    }
}



`;


export default AdminHome
