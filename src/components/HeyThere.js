import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import particles from '../assets/particles.json'

class HeyThere extends React.Component {
    state = {
        displayGreeting: false,
        displayGreeting2: false,
        displayName: false,
        displayButton: false,
    }

    componentDidMount() {
        setTimeout(() => this.setState({displayGreeting: true}), 1700)
        setTimeout(() => this.setState({displayGreeting2: true}), 3000)
        setTimeout(() => this.setState({displayName: true}), 4200)
        setTimeout(() => {
            this.setState({displayButton: true})
            this.props.allowOverflow();
        }, 5000)
    }

    learnMore = () => document.getElementById('about-me').scrollIntoView({behavior: 'smooth'})
    experience = () => document.getElementById('experience').scrollIntoView({behavior: "smooth"})
    contactMe = () => document.getElementById('contact-me').scrollIntoView({behavior: 'smooth'});

    render() {
        const { displayGreeting, displayGreeting2, displayName, displayButton} = this.state;
        return (
            <Main>
                <Header showHeader={displayButton}>
                    <a onClick={this.learnMore}>About me</a>
                    <a onClick={this.experience}>Experience</a>
                    <a onClick={this.contactMe}>Contact Me</a>
                </Header>
                <ParticleBox>
                    <Particles
                        height="95vh"
                        style={{left: 0, top: 0}}
                        params={particles} />
                </ParticleBox>
                <RedDiv></RedDiv>
                <RedDiv1></RedDiv1>
                <RedDiv2></RedDiv2>
                <RedDiv3></RedDiv3>
                <Box>
                    <Greeting displayGreeting={displayGreeting}>Hey there...</Greeting>
                    <Greeting2 displayGreeting={displayGreeting2}>Thanks for stopping by</Greeting2>
                    <Name displayTheName={displayName}>I'm Eddie by the way :)</Name>
                    <InfoButton displayButton={displayButton} onClick={this.learnMore}>
                        <i className="material-icons">info</i>
                        Learn More
                    </InfoButton>
                </Box>
            </Main>
        )
    }
}

export default HeyThere;

// styled components
const Box = styled.div`
    position: relative;
    max-width: 1200px;
    height: 100%;
    /* width: 100vw; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media only screen and (max-width: 700px) {
        h1 {
            font-size: 40px;
        }
    }
    @media only screen and (max-width: 500px) {
        h1 {
            font-size: 30px;
            left: 30px;
        }
    }
`
const ParticleBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`
const Main = styled.div`
    height: 100vh;
    /* width: 100%; */
    position: relative;
    background: #02020d;
`
const RedDiv = styled.div`
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    background: #000014;
    /* width: 100vw; */
    @keyframes init {
        0% { height: 100vh; opacity: 1 }
        25% { height: 100vh; opacity: 1 }
        50% { height: 100vh; opacity: .5 }
        75% { height: 0; opacity: .3 }
        100% { height: 0; opacity: 0 }
    }
    height: 70px;
    animation: init 1900ms;
    z-index: 3;
`
const RedDiv1 = styled.div`
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    background: #020221;
    /* width: 100vw; */
    @keyframes init {
        0% { height: 100vh; opacity: 1 }
        25% { height: 100vh; opacity: 1 }
        50% { height: 100vh; opacity: .5 }
        75% { height: 0; opacity: .3 }
        100% { height: 0; opacity: 0 }
    }
    height: 70px;
    animation: init 2000ms;
    z-index: 2;
`
const RedDiv2 = styled.div`
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    background: #00002b;
    /* width: 100vw; */
    @keyframes init {
        0% { height: 100vh; opacity: 1 }
        25% { height: 100vh; opacity: 1 }
        50% { height: 100vh; opacity: .5 }
        75% { height: 0; opacity: .3 }
        100% { height: 0; opacity: 0 }
    }
    height: 70px;
    animation: init 2100ms;
    z-index: 1;
`
const RedDiv3 = styled.div`
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    background: #000036;
    /* width: 100vw; */
    @keyframes init {
        0% { height: 100vh; opacity: 1 }
        25% { height: 100vh; opacity: 1 }
        50% { height: 100vh; opacity: .5 }
        75% { height: 0; opacity: .3 }
        100% { height: 0; opacity: 0 }
    }
    height: 70px;
    animation: init 2200ms;
`
const Greeting = styled.h1`
    transition: left 1200ms, opacity 1200ms;
    position: absolute;
    bottom: 65%;
    font-size: 60px;
    color: #f7f6e1;
    margin: 0;
    opacity: ${props => props.displayGreeting ? 1 : 0};
    left: ${props => props.displayGreeting ? 80 : 100}px;
`
const Greeting2 = styled.h1`
    font-size: 60px;
    transition: left 1200ms, opacity 1200ms;
    position: absolute;
    bottom: 65%;
    margin: 0;
    margin-bottom: -80px;
    color: #f7f6e1;
    opacity: ${props => props.displayGreeting ? 1 : 0};
    left: ${props => props.displayGreeting ? 80 : 100}px;
    @media only screen and (max-width: 500px) {
        margin-bottom: -40px;
    }
`
const Name = styled.h1`
    transition: left 1200ms, opacity 1200ms;
    position: absolute;
    font-size: 60px;
    color: #f7f6e1;
    bottom: 65%;
    margin-bottom: -160px;
    opacity: ${props => props.displayTheName ? 1 : 0};
    left: ${props => props.displayTheName ? 80 : 100}px;
    @media only screen and (max-width: 500px) {
        margin-bottom: -80px;
    }
`
const InfoButton = styled.button`
    background: transparent;
    transition: background 300ms, opacity 1200ms, transform 1200ms;
    border: 2px solid #f7f6e1;
    transform: ${props => props.displayButton ? 'translateY(-30vh)' : 'translateY(-25vh)'};
    opacity: ${props => props.displayButton ? 1 : 0};
    color: #f7f6e1;
    border-radius: 100px;
    font-size: 1rem;
    cursor: pointer;
    padding: 7.5px 15px;
    font-weight: bold;
    display: inline-flex;
    max-height: 40px;
    align-items: center;
    margin: 0 auto;
    & > i {
        padding-right: 7px;
    }
    outline: none;
    z-index: 10;
    &:hover {
        background: rgba(255, 255, 255, 0.2)
    }
    &:active {
        background: rgba(255, 255, 255, 0.5)
    }
`
const Header = styled.div`
    transition: opacity 1200ms, transform 1200ms;
    opacity: ${props => props.showHeader ? 1 : 0};
    transform: ${props => props.showHeader ? 'translateX(0)' : 'translate(-30px)'};
    display: flex;
    max-width: 800px;
    color: #f7f6e1;
    font-size: 1.2rem;
    font-weight: bold;
    position: fixed;
    top: 1px;
    padding: 20px 0;
    left: 50%;
    margin-left: -400px;
    & > a {
        padding-right: 50px;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    z-index: 20;
    @media only screen and (max-width: 850px) {
        width: 85%;
        margin: 0 auto;
        left: 15%;
    }
    @media only screen and (max-width: 600px) {
        font-size: 1rem;
        left: 0;
        margin: 0;
        width: 100%;
        & > a {
            padding-right: 0;
        }
        justify-content: space-evenly;
    }
`