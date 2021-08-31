import React from 'react';
import Styled from 'styled-components';
import '../App.css'


const PersonalProfile = () => {
  return <DivContainer>
    <Col30>
      <Col30Image src="images/pearson.png" alt="Billy Pearson" />
    </Col30>
    <Col70>
      <Name>
        <div>
          <StyledH5>Billy Pearson</StyledH5>
          <PersonSkill>Front-end developer</PersonSkill>
        </div>
        <div>
          <PersonEmail>billy@example.com</PersonEmail>
          <PersonPhoneNumber>(+603) 546 624 342</PersonPhoneNumber>
        </div>
      </Name>
      <div>
        <EnglishText>
          Self-motivated developer, who is willing to learn and create outstanding UI applications.
      </EnglishText>
        <StyledP>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
      </StyledP>
      </div>
    </Col70>
  </DivContainer>
};

const DivContainer = Styled.div`
 background-color: #fff;
 width:100%;
 padding:20px;
 box-sizing:border-box;
 display:flex;
 flex-direction:row;
 justify-content: center;
 border-radius: 12px;
 @media (max-width:800px){
    flex-direction: column;
 }
`
const Col30 = Styled.div`
 width: 30%;
 @media (max-width:800px){
    width: 100%;
    margin-bottom:25px;
 }
`
const Col30Image = Styled.img`
 max-width: 90%;
 border-radius:12px;
 @media (max-width:800px){
    width: 100%;
 }
`
const Col70 = Styled.div`
 width: 70%;
 display: flex;
 flex-direction: column;
 @media (max-width:800px){
    width: 100%;
 }
`
const StyledP = Styled.p`
 font-family: Montserrat;
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 22px;
 color: #828282;
`
const Name = Styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin-bottom: 37px;
 @media (max-width:800px){
    flex-direction: column;
 }
`
const StyledH5 =Styled.h5`
 font-family: Montserrat;
 font-style: normal;
 font-weight: 600;
 font-size: 24px;
 line-height: 29px;
 color: #4F4F4F;
 margin-bottom: 6px;
`
const PersonSkill = Styled(StyledP)`
 @media (max-width:800px){
     margin-bottom: 30px;
 }
`
const PersonEmail = Styled(StyledP)`
 color: #4F4F4F;
 margin-bottom: 10px;
`
const PersonPhoneNumber = Styled(StyledP)`
 color: #4F4F4F;
`
const EnglishText = Styled(StyledP)`
 margin-bottom: 25px;
`


export default PersonalProfile;