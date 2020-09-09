import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import dev from '../assets/dev.png'
import team from '../assets/team.png'
import check from '../assets/check.png'
import user from '../assets/important.jpeg'
import ReactVisibilitySensor from 'react-visibility-sensor';

export default function AboutMe(props) {    
    const [showBox, toggleBox] = useState(false);
    const [showUser, toggleUser] = useState(false);
    
    const learnMore = () => document.getElementById('about-me').scrollIntoView({behavior: 'smooth'})

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
                                    <h3>Experienced</h3>
                                    <a>extensive experience with web-development</a>
                                </Card>
                                <Card inSight={showBox}>
                                    <span>
                                        <img src={team} style={{filter: "brightness(0) invert(1)"}} width="150"/>
                                    </span>
                                    <h3>Efficient</h3>
                                    <a>easy to work with and easy to work for</a>
                                </Card>
                                <Card inSight={showBox}>
                                    <span>
                                        <img src={check} style={{filter: "brightness(0) invert(1)"}} width="150"/>
                                    </span>
                                    <h3>Effective</h3>
                                    <a><strong>most importanty</strong> - always gets the job done</a>
                                </Card>
                            </CardBox>
                        </ReactVisibilitySensor>
                    </span>
                        <ReactVisibilitySensor partialVisibility onChange={inSight => toggleUser(inSight)}>
                            <UserModule showUser={showUser}>
                                <UserInfo>
                                    <img src={user} height="250" style={{borderRadius: 15}}/>
                                </UserInfo>
                                <UserDescription>
                                    <Title style={{fontSize: "1.5rem"}}>Wait who?</Title>
                                    <Description>I'm Eddie Lopez, and the handsome person next to this description is me.
                                        I was a Software Engineer for ADM but largely focused my work on the creation of
                                        React Web Applications. I am passionate about what I do, and if there is anything
                                        that I can guarantee, is that no matter the task, I can get it done.
                                    </Description>
                                </UserDescription>
                            </UserModule>
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
    width: 100%;
    display: grid;
    max-width: 1200px;
    height: 100%;

`
const CardBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    @media only screen and (max-width: 850px) {
        width: 85%;
        margin: 0 auto;
    }
`
const Card = styled.div`
    margin: 0 auto;
    transition: opacity 1200ms, transform 1200ms;
    transition-delay: 200ms;
    opacity: ${props => props.inSight ? 1 : 0};
    transform: ${props => props.inSight ? "translateY(0)" : "translateY(30px)"};
    display: grid;
    grid-template-rows: 160px 20px 70px;
    max-width: 200px;
    max-height: 250px;
    min-width: 200px;
    color: #f7f6e1;
    background: transparent;
    /* border: 2px solid #f7f6e1; */
    border-radius: 15px;
    & > span {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    & > a {
        padding: 10px;
        text-align: center;
    }
    & > h3 {
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
`
const Title = styled.h1`
    color: #f7f6e1;
    margin: 0 auto;
    padding-bottom: 60px;
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
    width: 100%;
    height: 250px;
    display: grid;
    grid-template-columns: 300px 1fr;
    border-radius: 15px; 
    @media only screen and (max-width: 850px) {
        width: 85%;
        height: auto;
        & img {
            margin: 0 auto;
            width: 200px;
            height: 200px;
        }
    }
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`
const UserDescription = styled.div`
    & h1 {
        padding-bottom: 0px;
    }
`
const InnerBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    & > span {
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        @media only screen and (max-width: 850px) {
            width: 85%;
        }
    }
`