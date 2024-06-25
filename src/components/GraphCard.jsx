import React from 'react'
import styled from 'styled-components';
import CustomPieChart from './CustomPieChart';


const GraphCard = (props) => {
    return (
        <Wrapper>
          <div className="graph-card-cont">
            <CustomPieChart/>
          </div>
        </Wrapper>
      )
    }
    
    const Wrapper=styled.div`
    .graph-card-cont{
        background-color: #f3c8a2b2;
        width: 250px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 10px;
        gap: 20px;
        border-radius: 15px;
        box-shadow: 5px 5px #fb75009e;
    
        p{
            font-size: 1.3rem;
            font-weight: 700;
        }
    }
    @media(max-width:450px){
      .info-card-cont{
        width:150px;
        height:100px;
        padding:0;
        justify-content:space-evenly;
        h2{
          font-size:1rem;
        }
        p{
          font-size:1rem
        }
      }
    }
    @media(max-width:250px){
      .info-card-cont{
        width:100px;
        height:70px;
        padding:0;
        gap:10px;
        justify-content:center;
        h2{
          font-size:0.8rem;
        }
        p{
          font-size:0.6rem
        }
      }
    }
    
    `;
    GraphCard.defaultProps={
        heading:"Heading",
        value:"000"
    }
export default GraphCard
