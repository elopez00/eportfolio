import React, {useState} from 'react'
import styled from 'styled-components'
import PageShield from '../assets/pageshield.jpeg'
import Hercules from '../assets/hercules.jpeg'
import Bosawas from '../assets/bosawas-ui.jpeg'
import RoomEscape from '../assets/room-escape.jpeg'
import ReactVisibilitySensor from 'react-visibility-sensor'
import PreviewModule from './PreviewModule'

export default function Projects(props) {
    const [showProjects, toggleProjects] = useState(false);
    const [showOtherProjects, toggleOthers] = useState(false);
    const [showPreview, togglePreview] = useState(false);
    const [selectedProject, selectProject] = useState({});

    const projects = {
        pageShield: {
            img: PageShield,
            title: 'PageShield - ADM',
            description: "PageShield is a web application that manages Facebook Pages by using AI to hide negative comments. Working under ADM, I was able to create the Frontend of this web-app using ReactJS while using Facebook API and Stripe's component library for user onboarding and purchases."
        },
        bosawasUI: {
            img: Bosawas,
            title: 'Bosawas UI - Personal Project',
            description: "Bosawas UI, named after Nicaragua's largest nature reserve, is an Open-Source design system created to simplify the development of React applications. This design system is being developed using ReactJS and Storybook, and undergoing structural testing using Jest."
        }, 
        hercules: {
            img: Hercules,
            title: 'Hercules - ADM',
            description: 'Hercules is a Facebook marketing tool that predicted the performance of campaigns. In this project, other than creating the entire Frontend, I was responsible for maintining the RESTful API in the Backend SDK using Python, NodeJS, and MySQL.'
        }, 
        roomEscape: {
            img: RoomEscape,
            title: 'Room Escape - Personal Project',
            description: 'Room Escape is a first person shooter puzzle game that I created using C++ and Unreal Engine 4.'
        }
    }

    const handleClick = project => {
        selectProject(projects[project]);
        togglePreview(!showPreview);
    }

    return (
        <Main>
            <Box id="experience">
                <span>
                    <Title>Relevant Projects</Title>
                    <ProjectContainer>
                        <ReactVisibilitySensor partialVisibility onChange={isVisible => toggleProjects(isVisible)}>
                            <ProjectBox showBox={showProjects} translate={-15}>
                                <ProjectCard backgroundImg={PageShield} onClick={() => handleClick('pageShield')}>
                                    <span>
                                        <p> PageShield 
                                            <i className="material-icons">info</i>
                                        </p>
                                    </span>
                                </ProjectCard>
                                <ProjectCard backgroundImg={Bosawas} onClick={() => handleClick('bosawasUI')}>
                                    <span>
                                        <p> Bosawas UI
                                            <i className="material-icons">info</i>
                                        </p>
                                    </span>
                                </ProjectCard>
                            </ProjectBox>
                        </ReactVisibilitySensor>
                        <ReactVisibilitySensor partialVisibility onChange={isVisible => toggleOthers(isVisible)}>
                        <ProjectBox showBox={showOtherProjects} translate={15}>
                            <ProjectCard backgroundImg={Hercules} onClick={() => handleClick('hercules')}>
                                    <span>
                                        <p> Hercules
                                            <i className="material-icons">info</i>    
                                        </p>
                                    </span>
                                </ProjectCard>
                                <ProjectCard backgroundImg={RoomEscape} onClick={() => handleClick('roomEscape')}>
                                    <span>
                                        <p> Room Escape
                                            <i className="material-icons">info</i>    
                                        </p>
                                    </span>
                                </ProjectCard>
                            </ProjectBox>
                        </ReactVisibilitySensor>
                    </ProjectContainer>
                </span>
            <PreviewModule 
             showModule={showPreview} 
             toggleModule={() =>togglePreview(!showPreview)}
             project={selectedProject}
             />
            </Box>
        </Main>
    )
}

const Main = styled.div`
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    background-image: linear-gradient(black, #02020d);
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
    & > span {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`
const Title = styled.h1`
    color: #f7f6e1;
    display: inline-block;
    margin: 0;
    margin-bottom: 60px;
    text-align: center;
    @media only screen and (max-width: 850px) {
        margin: 60px;
    }
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
    max-width: 800px;
    @media only screen and (max-width: 850px) {
        width: auto;
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
    @media only screen and (max-width: 700px) {
        & > span {
            font-size: 1rem;
        }
    }
    `
const ProjectContainer = styled.div`
    height: 600px;
    display: grid;
    gap: 30px;
    width: 100%;
    @media only screen and (max-width: 700px) {
        gap: 15px;
        height: 400px;
    }
`