import React from 'react';
import Styled from 'styled-components';
import PersonalProfile from './components/PersonalProfile';
import ProjectBox from './components/ProjectBox';

function App() {


  return <StyledDiv>
    <ProjectBox />
    <PersonalProfile />
  </StyledDiv>


};

const StyledDiv = Styled.div`
background-color: #303030;;
padding: 97px 197px;
`
export default App;