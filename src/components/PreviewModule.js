import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import particles from '../assets/particles.json'
import particleimage from '../assets/particleimage.jpeg'

export default function PreviewModule(props) {
    // state 
    const [showModule, toggleModule] = useState(false);
    const [showTransition, toggleTransition] = useState(false);
    
    useEffect(() => {
        props.showModule !== showModule && manageTransition(showModule);
    })

    const manageTransition = moduleIsShown => {
        if (moduleIsShown) {
            setTimeout(() => toggleModule(false), 200);
            toggleTransition(false);
        } else {
            setTimeout(() => toggleTransition(true), 100);
            toggleModule(true);
        }
    }

    return (
        <Main showModule={showModule} showTransition={showTransition}>
            <CPreviewModule backgroundImage={props.project.img}>
                <span>
                    <img src={props.project.img} />
                </span>
                <Description>
                    <h2>{props.project.title}</h2>
                    <p>{props.project.description}</p>
                </Description>
                <i className="material-icons" onClick={props.toggleModule}>close</i>
            </CPreviewModule>
        </Main>
    )
}

const Main = styled.div`
    opacity: ${props => props.showTransition ? 1 : 0};
    display: ${props => props.showModule ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-around;
    transition: opacity 300ms;
    position: fixed;
    height: 100vh;
    width: 100vw;
    right: 0;
    top: 0;
    background: rgb(201, 201, 201, 0.4);
    z-index: 10023049182340;
`
const CPreviewModule = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    color: #f7f6e1;
    border-radius: 5px;
    background: #02020d;
    position: relative;
    & > i {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px;
        background: rgb(0,0,0, .7);
        border-radius: 100%;
        font-size: 1rem;
        cursor: pointer;
    }
    & > span {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    & > span > img {
        border-radius: 5px 5px 0 0;
        height: 360px;
    }
    @media only screen and (max-width: 700px) {
        & > span > img {
            height: 250px;
        }
    }
    @media only screen and (max-width: 470px) {
        & > span > img {
            height: 200px;
            width: 340px;
        }
    }
`
const Description = styled.div`
    width: 500px;
    margin: 0 auto;
    position: relative;
    background-image: url(${particleimage});
    background-size: cover;
    & h2 {
        margin-bottom: 20px;
    }
    & p {
        padding-bottom: 20px
    }
    @media only screen and (max-width: 700px) {
        width: 350px;
    }
    @media only screen and (max-width: 460px) {
        width: 300px;
    }
`