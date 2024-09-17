import React from 'react';
import styled from 'styled-components';

const ClassSection = () => {
  return (
    <MainContainer>
        <HoriContainer>
            <h1>Choose Plan</h1>
            <Description>
            <p>Choose your perfect yoga class from our diverse offerings, tailored for all levels. Whether you're a beginner or advanced practitioner, find the right fit for your journey.</p>
            </Description>
        </HoriContainer>


        <PlansContainer>
            <ELE>
                <ImagCon src='./images/newbiee.png'/>
                <Content>
                    <h1>NewBie Plan</h1>
                    <h3>Fee: 1500 /-</h3>
                </Content>
            </ELE>
            <ELE>
                <ImagCon src='./images/Advanced.png'/>
                <Content>
                    <h1>Advanced Plan</h1>
                    <h3>Fee: 3500 /-</h3>
                </Content>
            </ELE>
            <ELE>
                <ImagCon src='./images/expert.png'/>
                <Content>
                    <h1>Expert Plan</h1>
                    <h3>Fee: 5500 /-</h3>
                </Content>
            </ELE>
        </PlansContainer>
    </MainContainer>
  )
}

export default ClassSection

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F2F9F4;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-image: url("./images/section2bg.png");
    background-repeat: no-repeat;
    background-size: cover;
`

const HoriContainer =  styled.div`
height: 26%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    font-size: 50px;
    color: white;
}
`

const PlansContainer = styled.div`
height: 74%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`

const Description = styled.div`
    width: 700px;
    color: white;
    margin-top: 33px; 
    display: flex;
    align-items: center;
    justify-content: center;
`

const ELE = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1{
        font-size: 50px;
        font-weight: 700;
        margin: 5px;
    }
    h3{
        font-size: 20px;
        font-weight: 400;
        margin: 5px;
    }
`

const ImagCon = styled.img`
height: 62%;
mix-blend-mode: multiply;
`

const Content = styled.div`
    height: 36%;
    width: 100%;
    display: flex;
    flex-direction: column;
`