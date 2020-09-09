import React, {useState} from 'react'
import styled from 'styled-components'
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
                            <ProjectCard>d</ProjectCard>
                            <ProjectCard>d</ProjectCard>
                        </ProjectBox>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor partialVisibility onChange={isVisible => toggleOthers(isVisible)}>
                        <ProjectBox showBox={showOtherProjects} translate={15}>
                            <ProjectCard>d</ProjectCard>
                            <ProjectCard>d</ProjectCard>
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
    background: white;
    margin: 0 15px;
    flex: 1;
    height: 100%;
`
const ProjectContainer = styled.div`
    height: 600px;
    display: grid;
    gap: 30px;
`