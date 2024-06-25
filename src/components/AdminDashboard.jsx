import React from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'
import "../common.css"
import GraphCard from './GraphCard'

const AdminDashboard = () => {
  return (
    <Wrapper>
      <div className="cont">
        <div className="info-cont">
            <InfoCard heading="Total Students" value="150"/>
            <InfoCard heading="Total Students" value="150"/>
            <InfoCard heading="Total Students" value="150"/>
        </div>
        <div className="graph-cont">
            <GraphCard/>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100%;
padding:30px;

.cont{
    display:flex;
    flex-direction:column;
    gap:50px
}

.info-cont{
    display:flex;
    width: 100%;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    border-radius: 15px;
    border:1px solid #fb7500;
    box-shadow: 5px 5px 10px #fb75009e;
    padding:30px;
}
.graph-cont{
    display:flex;
    width: 100%;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    border-radius: 15px;
    border:1px solid #fb7500;
    box-shadow: 5px 5px 10px #fb75009e;
    padding:30px
}
@media(max-width:400px){
    padding:15px;

    .info-cont{
        padding:40px 10px;
    }
    .graph-cont{
        padding:40px 10px;
    }
}

`;

export default AdminDashboard
