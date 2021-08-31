import React from 'react';
import Styled from 'styled-components';
import '../App.css'


const ProjectBox = () => {
  return <DivContainer>
    <Col40>
      <Col40Image src="images/recipe.png" alt="Recip Blog" />
    </Col40>
    <Col60>
         <div>
         <Hash>
          <p>#HTML</p>
          <p>#CSS</p>
          <p>#responsive</p>
        </Hash>
         </div>
        <div>
        <StyledH5>Recipe Blog</StyledH5>
        <ExplainText>In this project, I work with HTML and CSS to create a responsive page .
           The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam 
           sollicitudin id. Quisque feugiat malesuada molestie. 
           </ExplainText>
        </div>
       <div>

       </div>




      <div>
        <EnglishText>
          Self-motivated developer, who is willing to learn and create outstanding UI applications.
      </EnglishText>
        <StyledP>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
      </StyledP>
      </div>
    </Col60>
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
const Col40 = Styled.div`
 width: 40%;
 @media (max-width:800px){
    width: 100%;
    margin-bottom:25px;
 }
`
const Col40Image = Styled.img`
 max-width: 90%;
 border-radius:12px;
 @media (max-width:800px){
    width: 100%;
 }
`
const Col60 = Styled.div`
 width: 60%;
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
const StyledH5 = Styled.h5`
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


export default ProjectBox;