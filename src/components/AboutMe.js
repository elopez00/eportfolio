import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import dev from '../assets/dev.png'
import team from '../assets/team.png'
import check from '../assets/check.png'
import user from '../assets/me.jpg'
import ReactVisibilitySensor from 'react-visibility-sensor';

export default function AboutMe(props) {    
    const [showBox, toggleBox] = useState(false);
    const [showUser, toggleUser] = useState(false);
    
    return (
        <Main id="about-me">
            <Box>
                <InnerBox>
                    <span>
                        <Title>About me</Title>
                        <ReactVisibilitySensor onChange={inSight => toggleBox(inSight)} partialVisibility>
                            <CardBox>
                                <Card inSight={showBox}>
                                    <span>
                                        <img src={dev} style={{filter: "brightness(0) invert(1)"}} width="150"/>
                                    </span>
                                    <div>
                                        <h3>Experienced</h3>
                                        <a>extensive experience with web-development</a>
                                    </div>
                                </Card>
                                <Card inSight={showBox}>
                                    <span>
                                        <img src={team} style={{filter: "brightness(0) invert(1)"}} width="150"/>
                                    </span>
                                    <div>
                                        <h3>Efficient</h3>
                                        <a>easy to work with and easy to work for</a>
                                    </div>
                                </Card>
                                <Card inSight={showBox}>
                                    <span>
                                        <img src={check} style={{filter: "brightness(0) invert(1)"}} width="150"/>
                                    </span>
                                    <div>
                                        <h3>Effective</h3>
                                        <a><strong>most importanty</strong> - always gets the job done</a>
                                    </div>
                                </Card>
                            </CardBox>
                        </ReactVisibilitySensor>
                    </span>
                        <ReactVisibilitySensor partialVisibility onChange={inSight => toggleUser(inSight)}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Title>About me</Title>
                                <UserModule showUser={showUser}>
                                    <UserInfo>
                                        <span />
                                        {/* <img src={user} height="250" width="250" style={{borderRadius: 15}}/> */}
                                    </UserInfo>
                                    <UserDescription>
                                        <SmallTitle style={{fontSize: "1.5rem"}}>Wait who?</SmallTitle>
                                        <Description>
                                            My name is Eddie Lopez and I am a software developer from Nicaragua with US citizenship.
                                            I currently reside in Gainesville Florida where I am pursuing my undergraduate 
                                            degree in Computer Science at the University of Florida. Although I specialize
                                            in frontend and web-applications, I am interested in working in all areas of 
                                            software development. I have over a year of professional experience and am
                                            willing to expand my knowledge and my horizons to any opportunities that come 
                                            my way.
                                        </Description>
                                    </UserDescription>
                                </UserModule>
                            </div>
                        </ReactVisibilitySensor>
                </InnerBox>
            </Box>
        </Main>
    )
    
}


const Main = styled.div`
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    background-image: linear-gradient(#02020d, black);
    @media only screen and (max-width: 850px) {
        height: auto;
    }
`
const Box = styled.div`
    margin: 0 auto;
    display: grid;
    max-width: 1200px;
    height: 100%;

`
const CardBox = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    @media only screen and (max-width: 850px) {
        width: 85%;
        margin: 0 auto;
    }
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        margin-bottom: 30px;
    }
`
const Card = styled.div`
    margin: 0 auto;
    transition: opacity 1200ms, transform 1200ms;
    transition-delay: 200ms;
    opacity: ${props => props.inSight ? 1 : 0};
    transform: ${props => props.inSight ? "translateY(0)" : "translateY(30px)"};
    display: grid;
    grid-template-rows: 160px 90px;
    max-width: 200px;
    max-height: 250px;
    min-width: 200px;
    color: #f7f6e1;
    background: transparent;
    border-radius: 15px;
    & > span {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    & > div {
        display: grid;
        grid-template-rows: 20px 70px;
    }
    & > div > a {
        padding: 10px;
        text-align: center;
    }
    & > div > h3 {
        margin: 0 auto;
    }
    @media only screen and (max-width: 850px) {
        max-width: 125px;
        max-height: 200px;
        grid-template-rows: 80px 20px 100px;
        font-size: 1rem;
        & img {
            width: 80px;
        }
    }
    @media only screen and (max-width: 700px) {
        display: flex;
        width: 100%;
        align-items: center;
        max-width: 100%;
        align-items: center;
        margin: 15px;
        & > div {
            display: flex;
            flex-direction: column;
        }
        & > div > a { 
            margin-left: 15px;
            text-align: left;
        }
        & > div > h3 {
            margin-left: 15px;
            text-align: left;
            padding-left: 10px;
        }
    }
`
const Title = styled.h1`
    color: #f7f6e1;
    margin: 0 auto;
    padding-bottom: 60px;
    @media only screen and (max-width: 850px) {
        margin-top: 100px;
        padding-bottom: 30px;
    }
`
const SmallTitle = styled.h1`
    font-size: 1rem;
    color: #f7f6e1;
    margin: 0 auto;
    padding-bottom: 60px;
    @media only screen and (max-width: 700px) {
        text-align: center;
    }
`
const Description = styled.p`
    color: #f7f6e1;
    text-align: left;
    font-size: 1rem;
    line-height: 1.8rem;
`
const UserModule = styled.div`
    transition: opacity 1200ms, transform 1200ms;
    transition-delay: 200ms;
    opacity: ${props => props.showUser ? 1 : 0};
    transform: ${props => props.showUser ? "translateY(0px)" : "translateY(30px)"};
    max-width: 800px;
    height: 250px;
    display: grid;
    grid-template-columns: 300px 1fr;
    border-radius: 15px; 
    @media only screen and (max-width: 850px) {
        width: 85%;
        height: auto;
        & span {
            margin: 0 auto;
            width: 200px;
            height: 200px;
        }
    }
    @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 300px 1fr;
        margin-bottom: 30px;
    }
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    & > span {
        display: block;
        background-image: url(${user});
        margin: 0 auto;
        width: 250px;
        height: 250px;
        background-size: cover;
        background-position-y: bottom;
        border-radius: 15px;
    }
    @media only screen and (max-width: 700px) {
        & > span {
            height: 250px;
        }
    }
`
const UserDescription = styled.div`
    & h1 {
        padding-bottom: 0px;
    }
    @media only screen and (max-width: 700px) {
        width: 85%;
        margin: 0 auto;
    }
`
const InnerBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (max-width: 700px) {
        & > span > h1 { display: none; }
        flex-direction: column-reverse;
    }
    & > span {
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        @media only screen and (max-width: 850px) {
            width: 85%;
        }
    }
    & > div > h1 { 
        display: none;
        @media only screen and (max-width: 700px) {
            display: block;
        }
    }
`