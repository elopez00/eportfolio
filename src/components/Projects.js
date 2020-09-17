import React, {useState} from 'react'
import styled from 'styled-components'
import PageShield from '../assets/pageshield.jpeg'
import Hercules from '../assets/hercules.jpeg'
import ReactVisibilitySensor from 'react-visibility-sensor'

export default function Projects(props) {
    const [showProjects, toggleProjects] = useState(false);
    const [showOtherProjects, toggleOthers] = useState(false);
    return (
        <Main>
            <Box id="experience">
                <Title>Relevant Projects</Title>
                <ProjectContainer>
                    <ReactVisibilitySensor partialVisibility onChange={isVisible => toggleProjects(isVisible)}>
                        <ProjectBox showBox={showProjects} translate={-15}>
                            <ProjectCard backgroundImg={PageShield}>
                                <span>
                                    <p> PageShield 
                                        <i className="material-icons">info</i>
                                    </p>
                                </span>
                            </ProjectCard>
                            <ProjectCard backgroundImg={Hercules}>
                                <span>
                                    <p> Hercules
                                        <i className="material-icons">info</i>    
                                    </p>
                                </span>
                            </ProjectCard>
                        </ProjectBox>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor partialVisibility onChange={isVisible => toggleOthers(isVisible)}>
                    <ProjectBox showBox={showProjects} translate={15}>
                            <ProjectCard backgroundImg={PageShield}>
                                <span>
                                    <p> PageShield 
                                        <i className="material-icons">info</i>
                                    </p>
                                </span>
                            </ProjectCard>
                            <ProjectCard backgroundImg={Hercules}>
                                <span>
                                    <p> Hercules
                                        <i className="material-icons">info</i>    
                                    </p>
                                </span>
                            </ProjectCard>
                        </ProjectBox>
                    </ReactVisibilitySensor>
                </ProjectContainer>
            </Box>
        </Main>
    )
}

const Main = styled.div`
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    background-image: linear-gradient(black, #02020d);
    @media only screen and (max-width: 850px) {
        height: auto;
    }
`
const Box = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    height: 100%;
`
const Title = styled.h1`
    color: #f7f6e1;
    display: inline-block;
    margin: 0;
`
const ProjectBox = styled.div`
    transition: opacity 1200ms, transform 1200ms;
    transition-delay: 200ms;
    opacity: ${props => props.showBox ? 1 : 0};
    transform: ${props => props.showBox ? 'translateX(0)' : `translate(${props.translate}px)`};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    width: 800px;
    @media only screen and (max-width: 850px) {
        width: 85%;
        margin: 0 auto;
    }
`
const ProjectCard = styled.div`
    display: flex;
    margin: 0 15px;
    flex: 1;
    height: 100%;
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    & > span {
        background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
        background-color: transparent;
        height: 30%;
        color: white;
        display: flex;
        justify-content: space-around;
        font-size: 1.2rem;
        transition: background 500ms, height 500ms, font-size 500ms;
        flex-direction: column;
        & > p {
            display: flex;
            align-items: center;
            margin-left: 25px;
        }
        & > p > i {
            padding-left: 10px;
            opacity: 0;
            transition: opacity 300ms;
        }
    }
    &:hover > span {
        background-color: rgb(0, 0, 0, 0.5);
        height: 100%;
        cursor: pointer;
        & > p > i {
            opacity: 1;
        }

    }
    `
const ProjectContainer = styled.div`
    height: 600px;
    display: grid;
    gap: 30px;
`