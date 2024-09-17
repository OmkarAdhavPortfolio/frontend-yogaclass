import React from 'react'
import styled from 'styled-components'

const Stats = () => {
  return (
    <MainContainer>
        <HoriContainer>
            <h1>Our Stats</h1>
            <Description>
            <p>Choose your perfect yoga class from our diverse offerings, tailored for all levels. Whether you're a beginner or advanced practitioner, find the right fit for your journey.</p>
            </Description>
        </HoriContainer>


        <PlansContainer>
            <ELE className='active'>
                <Content>
                    <h1>123</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </Content>
            </ELE>
            <ELE>
                <Content>
                    <h1>123</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </Content>
            </ELE>
            <ELE>
                <Content>
                    <h1>123</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </Content>
            </ELE>
        </PlansContainer>
    </MainContainer>
  )
}

export default Stats

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ##EEFFFE;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url("./images/section3.png");
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
`

const HoriContainer =  styled.div`
height: 26%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    overflow-y: hidden;
    font-size: 70px;
    font-weight: 800;
    color: #077589;
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
    color: #077589;
    margin-top: 33px; 
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
`

const ELE = styled.div`
     width: 400px;
    height: 400px;
    border: #077589 solid 7px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #077589;
    margin-top: 20px;
    h1{
        font-size: 70px;
        font-weight: 700;
        margin: 3px;
    }
    h3{
        font-size: 20px;
        font-weight: 200;
        margin: 3px;
    }
`


const Content = styled.div`
    width: auto;
`

// const ImageHolder = styled.div`
// width: 100%;
// height: 100%;
// position: relative;
//     background-image: url("./images/section3bg.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     mix-blend-mode: multiply;
// `