import React from 'react'
import styled from 'styled-components'

export default function ProjectCard({project, onClick}) {
    console.log(onClick)
    return (
        <CProjectCard backgroundImg={project.img} onClick={() => onClick && onClick(project)}>
            <span>
                <p> {project.name}
                    <i className="material-icons">info</i>
                </p>
            </span>
        </CProjectCard>
    )
}

const CProjectCard = styled.div`
    display: flex;
    margin: 0 15px;
    flex: 1;
    height: 100%;
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-radius: 15px;
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