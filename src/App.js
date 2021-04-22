import React from 'react';
import styled from 'styled-components'
import HeyThere from './components/HeyThere'
import AboutMe from './components/AboutMe'
import './assets/App.css'
import GlobalStyle from './components/GlobalStyle'
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe'

class App extends React.Component {
  state = {
    overflow: false,
  }

  allowOverflow = () => this.setState({overflow: true});

  render() {
    const { overflow } = this.state
    return (
      <div>
        <GlobalStyle overflow={overflow}/>
        <HeyThere allowOverflow={this.allowOverflow} />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    )
  }
}

export default App;
