import React, {useState} from 'react';
import styled from 'styled-components';

import ReactVisibilitySensor from 'react-visibility-sensor'

export default function ProjectBox(props) {
    const [showProject, toggleProject] = useState(false);
    
    return (
        <ReactVisibilitySensor partialVisibility onChange={isVisible => toggleProject(isVisible)}>
            <CProjectBox showBox={showProject} translate={props.index % 2 == 0 ? -25 : 25}>
                { props.children }
            </CProjectBox>
        </ReactVisibilitySensor>
    )
}

const CProjectBox = styled.div`
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
        margin: 0 auto;
        width: 85%;
    }
`