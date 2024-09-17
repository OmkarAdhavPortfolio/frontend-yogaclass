import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <MainContainer>

        <ImgLogo  src='./images/logo.png'/>

        <InnerContainer>
            <Gaap></Gaap>
            <ELE active>HOME</ELE>
            <ELE>ABOUT US</ELE>
            <ELE>SERVICES</ELE>
            <ELE>CONTACT US</ELE>
        </InnerContainer>
    </MainContainer>
  )
}

export default Header

const MainContainer = styled.div`
height: 82px;
width: 100%;
//background-color: #509990;
position: absolute;
top: 0px;
left: 0;
display: flex;
align-items: center;
justify-content: center;
padding: 1px;
margin: 1px;
`

const InnerContainer = styled.div`
display: flex;
flex-direction: row;
width: 90%;
height: 50%;

background-color: #DEEEE8;
`

const ImgLogo = styled.img`
height: 100%;
`

const Gaap = styled.div`
width: 40%;
height: 100%;
background-color: #DEEEE8;
`

const ELE = styled.div`
width: 15%;
height: 100%;
margin: 1px;
display: flex;
justify-content: center;
align-items: center;
font-color: ${(props) => (props.active ? '#DEEEE8' : '#509990')};
font-weight: 600;
background-color: ${(props) => (props.active ? '#509990' : '#DEEEE8')};
cursor: pointer;

&:hover {
    background-color: #509990;
  }
`
// const ImageContainer = styled.div`
// width: 10%;
// `