import React from 'react'
import { createGlobalStyle } from 'styled-components'

export default function setGlobalStyle(props) {
    return <GlobalStyle overflow={props.overflow}/>
}

const GlobalStyle = createGlobalStyle`
    body {
        overflow: ${props => props.overflow ? "auto" : "hidden"};
        overflow-x: hidden
    }
`
