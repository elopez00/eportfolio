import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import particles from '../assets/particles.json'

export default function ContactMe(props) {
    return (
        <Main id="contact-me">
            <ParticleBox>
                <Particles
                    height="95vh"
                    style={{left: 0, top: 0}}
                    params={particles} />
            </ParticleBox>
            <ContactForm>
                <h1>Contact Me</h1>
                <div>
                    <TextInput placeholder="Email" type="text"/>
                    <TextInput placeholder="Name" type="text"/>
                </div>
                <div>
                    <TextArea placeholder="Your Message..."/>
                </div>
                <Button>Submit</Button>
            </ContactForm>
        </Main>
    )
}

const Main = styled.div`
    height: 100vh;
    position: relative;
    background: #02020d;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ParticleBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`
const ContactForm = styled.form`
    max-width: 800px;
    width: 100%;
    background: rgb(20, 20, 20, 0.5);
    color: #f7f6e1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    & > h1 {
        text-align: center;
    }
    z-index: 10;
    & > div {
        display: flex;
        width: 90%;
        margin: 0 auto;
    }
`
const TextInput = styled.input`
    background: rgb(50, 50, 50, 0.5);
    font-size: 1rem;
    color: #f7f6e1;
    border-radius: 50px;
    padding: 10px;
    padding-left: 15px;
    border: none;
    outline: none;
    flex: 1;
    margin: 10px;
`
const TextArea = styled.textarea`
    background: rgb(50, 50, 50, 0.5);
    height: 250px;
    flex: 1;
    font-size: 1rem;
    border: none;
    border-radius: 20px;
    margin: 15px;
    padding: 15px;
    outline: none;
    color: #f7f6e1;
`
const Button = styled.button`
    transition: background 300ms;
    background: rgb(50, 50, 50, 0.5);
    border: none;
    color: #f7f6e1;
    border-radius: 100px;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 15px 40px;
    font-weight: bold;
    display: inline-flex;
    max-height: 40px;
    align-items: center;
    margin: 30px auto;
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