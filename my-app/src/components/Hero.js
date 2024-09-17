import React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Hero = () => {
  return (
    <MainContainer>
        {/* <ColContainerImg src='' alt='Heroimg'/> */}

        <ColContainer>
            <HeroText>
                YOGA CLASS
            </HeroText>
            <Description>
                "Find Balance, Breathe Deep, and Embrace Your Inner Peace"
            </Description>

            <ButtonContainer>
                <Button variant="contained" endIcon={<ArrowCircleRightIcon />}>Join Now</Button>
            </ButtonContainer>
            
        </ColContainer>
    </MainContainer>
  )
}

export default Hero;

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F2F9F4;
    display:flex;
    flex-direction: colomn;
    justify-content: flex-end;
    align-items: center;
    background-image: url("./images/Herobg.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index:-1;
`

const ColContainer = styled.div`
    width: 49%;
    height: 35vh;
    margin: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const HeroText = styled.h1`
font-size: 100px;
font-weight: 700;
color: #509995;
`

const Description = styled.h3`
font-weight: 400;
font-size: 19px;
color: #77A5CB;
`

const ButtonContainer = styled.div`
width: 100%;
margin-top: 9px;
`