import React, {useState} from 'react'
import styled from 'styled-components'

// components
import ProjectCard from './ProjectCard'
import ProjectBox from './ProjectBox'
import PreviewModule from '../PreviewModule'

// data
import projects from '../../data/projects'

export default function Projects(props) {
    // state
    const [showPreview, togglePreview] = useState(false);
    const [selectedProject, selectProject] = useState({});

    /**
     * Handles the click action on project cards and displays the modal with the selected project
     * @param {Object} project object containing project description per the project.js file in data 
     */
    const handleClick = project => {
        selectProject(project);
        togglePreview(!showPreview);
    }

    /**
     * Takes in an array of keys and a modifiable array and distributes the keys into
     * rows composed of two columns
     * @param {Array} keys array of object keys
     * @param {Array} rows modifiable array
     * @returns nothing
     */
    const rowDistributor = (keys, rows) => {
        if (keys.length >= 2) {
            rows.push([
                <ProjectCard project={projects[keys[0]]} onClick={handleClick} />,
                <ProjectCard project={projects[keys[1]]} onClick={handleClick} />
            ]);
            rowDistributor(keys.splice(2), rows);
        } else if (keys.length === 1) {
            rows.push([
                <ProjectCard project={projects[keys[0]]} onClick={handleClick} />,
                <ProjectCard style={{opacity: 0, visibility: "hidden"}}/>
            ]);
            return 
        } else {
            return
        };
    }

    /**
     * Renders project modules 
     * @returns an array with the JSX required to render all the project modules
     */
    const renderProjectModules = () => {
        let projectsArray = Object.keys(projects);
        let rows = [];
        let jsx = [];
        
        rowDistributor(projectsArray, rows);
        
        for (let i in rows) {
            jsx.push(
                <ProjectBox index={i}>
                    {rows[i]}
                </ProjectBox>
            )
        }

        return jsx;
    }

    return (
        <Main>
            <Box id="experience">
                <span>
                    <Title>Relevant Projects</Title>
                    <ProjectContainer>
                        { 
                            renderProjectModules()
                        }
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