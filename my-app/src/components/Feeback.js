import React from 'react'
import styled from 'styled-components'

const Feeback = () => {
  return (
    <Container>
        <HeroText>Don't Miss Our Update</HeroText>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus, tristique ac mattis quis, efficitur ac nunc. Integer mollis, dolor at dictum vulputate, arcu ipsum commodo neque, nec imperdiet diam dui feugiat libero. Donec eget tempus ante, id posuere turpis. Fusce molestie nisi tincidunt augue.</Description>

        <InputContainer>
        <StyledInput type="text" placeholder='Your Email' />
        <StyledButton>Subscribe</StyledButton>
        </InputContainer>
    </Container>
  )
}

export default Feeback

const Container = styled.div`
height: 70vh;
width: 100vw;
background-color: #F2F9F4;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const HeroText = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: #509995;
    height: 20%;
    width: 100%;
`

const Description = styled.div`
    font-size: 20px;
    font-weight: 300;
    color: #67b0ac;
    height: 30%;
    width: 70%;
`
const InputContainer = styled.div`
width: 70%;
height: 30%;
position: relative; 
display: inline-block; 
`

export const StyledInput = styled.input`
  width: 100%;
  height: 40%;
  padding: 30px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  position: absolute; 
    top: 0; 
    right: 0; 
    border: none; 
  border: none;
  border-radius: 20px;
  cursor: pointer;
  height: 41%;
  font-size: 20px;
  font-weight: 700;
  width: 200px;
`