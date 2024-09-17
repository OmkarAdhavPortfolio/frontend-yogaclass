import React from 'react';
import styled from 'styled-components';

const BestInstructor = () => {
  return (
    <MainContainer>
        {/* <ColContainerImg src='' alt='Heroimg'/> */}

        <ColContainer>
            <HeroText>
                <p>Best</p>
                <p>Instructor</p>
            </HeroText>
            <Description>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur ac nunc. Integer mollis, dolor at dictum vulputate, arcu ipsum commodo neque</p>
            </Description>

            <ButtonContainer>
            <ColorButton>Learn More</ColorButton>
            </ButtonContainer>
            
        </ColContainer>
    </MainContainer>
  )
}

export default BestInstructor

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F2F9F4;
    display:flex;
    flex-direction: colomn;
    justify-content: flex-start;
    align-items: center;
    background-image: url("./images/section4.jpg");
    background-repeat: no-repeat;
    background-size: cover;

`

const ColContainer = styled.div`
    width: 49%;
    height: 100%;
    margin: 2px;
    display: flex;
    justify-content: center;;
    align-items: center;
    flex-direction: column;
    background-color: #509995;
`

const HeroText = styled.h1`
font-size: 100px;
font-weight: 700;
color: white;
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: flex-start;
justify-content: flex-start;
p{
top:0;
left: 0;
margin-left: 25px;
}

margin-bottom: 40px;
`

const Description = styled.h3`
width: 100%;
font-size: 15px;
font-weight: 400;
font-size: 19px;
color: white;
display: flex;
align-items: flex-start;
justify-content: flex-start;
text-align: justify;
  text-justify: inter-word;
p{
top:0;
left: 0;
width: 70%;
margin-left: 25px;
}
`

const ButtonContainer = styled.div`
width: 100%;
margin-top: 9px;
display: flex;
align-items: flex-start;
`

const ColorButton = styled.button`
    height: 50px;
    width: 150px;
    padding: 5px;
    background-color: white;
    color: #509995;
    font-weight: 700;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    margin-left: 25px;
`