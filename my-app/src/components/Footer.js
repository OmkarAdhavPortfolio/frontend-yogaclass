import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <MainContainer>
        <Content>
            <TiTle>YOGA CLASS</TiTle>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.</Description>
        </Content>
        
        
        <LinkTab>
            <LTiTle>About us</LTiTle>
            <LinksTEXT>History</LinksTEXT>
            <LinksTEXT>Our Team</LinksTEXT>
            <LinksTEXT>Brand GuideLines</LinksTEXT>
            <LinksTEXT>Terms and Condition</LinksTEXT>
        </LinkTab>

        <LinkTab>
            <LTiTle>Services</LTiTle>
            <LinksTEXT>Our Products</LinksTEXT>
            <LinksTEXT>How To Order</LinksTEXT>
            <LinksTEXT>Order Status</LinksTEXT>
            <LinksTEXT>Promo</LinksTEXT>
            <LinksTEXT>Payment Method</LinksTEXT>
        </LinkTab>

        <LinkTab>
            <LTiTle>Follow</LTiTle>
            <LinksTEXT><InstagramIcon />Instagram</LinksTEXT>
            <LinksTEXT><FacebookIcon />Facebook</LinksTEXT>
            <LinksTEXT><XIcon />Twitter</LinksTEXT>
            <LinksTEXT><WhatsAppIcon />Whatsapp</LinksTEXT>
        </LinkTab>
    </MainContainer>
  )
}

export default Footer

const MainContainer = styled.div`
height: 60vh;
width: 100%;
display: flex;
background-color: #509990;
justify-content: flex-start;
`

const Content = styled.div`
height: 100%;
width: 40%;
display: flex;
flex-direction: column;
`

const LinkTab = styled.div`
height: 100%;
width: 20%;
display: flex;
color: #DEEEE8;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TiTle = styled.div`
height: 30%;
widdth : 100%;
font-size: 65px;
font-weight: 700;
color: #DEEEE8;
overflow-y:hidden;
`

const LTiTle = styled.div`
height: 20%;
width : 100%;
font-size: 45px;
font-weight: 700;
color: #DEEEE8;
overflow-y:hidden;
text-align: left;
margin: 4px;
`

const Description = styled.div`
height: 70%;
width: 80%;
font-size: 25px;
font-weight: 400;
color: #DEEEE8;
float: left;
text-align:left;
margin: 80px;
`

const LinksTEXT = styled.div`
width: 100%;
font-size: 20px;
font-weight: 200;
color: #DEEEE8;
text-align: left;
display: flex;
align-item: center;
justify-content: center;
margin: 4px;
`