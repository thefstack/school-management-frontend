import React from 'react'
import styled from 'styled-components'

const InfoGraphContainer = () => {
  return (
    <Wrapper>
      <div className="graphCont"></div>
    </Wrapper>
  )
}

const Wrapper=styled.div`

.graphCont{
    width: 300px;
    height: 200px;
    background-color: rgba(184, 183, 183, 0.274);
    border-radius: 15px;
    box-shadow: 5px 5px 15px #a0a0a0b5;
}
@media(max-width:450px){
    .graphCont{
        width: 150px;
        height: 150px;
    }
}

`;

export default InfoGraphContainer
