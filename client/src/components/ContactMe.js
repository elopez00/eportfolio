import React, { useState } from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import particles from '../assets/particles.json'
import ReactVisibilitySensor from 'react-visibility-sensor'
import emailjs, { init } from 'emailjs-com';

init("user_M3fSAwhMltp9E4jQFzhg1");

export default function ContactMe(props) {
    // state
    const [formVisibility, setVisibility] = useState(false);

    // sends mail to personal email
    const sendMail = event => {
        event.preventDefault();

        emailjs.sendForm('service_ng47oxt', 'template_4ver69b', event.target, 'user_M3fSAwhMltp9E4jQFzhg1')
            .then(res => {
                document.getElementById('email').value = '';
                document.getElementById('name').value = '';
                document.getElementById('message').value = '';
            })
            .catch(err => console.alert(err));
    }

    return (
        <Main id="contact-me">
            <ParticleBox>
                <Particles
                    height="95vh"
                    style={{left: 0, top: 0}}
                    params={particles} />
            </ParticleBox>
            <ReactVisibilitySensor partialVisibility onChange={e => setVisibility(e)}>
                <ContactForm visible={formVisibility} onSubmit={sendMail}>
                    <h1>Contact Me</h1>
                    <div>
                        <TextInput placeholder="Name" name="from_name" type="text" id="name"/>
                        <TextInput placeholder="Email" name="from_email" type="text" id="email"/>
                    </div>
                    <div>
                        <TextArea placeholder="Your Message..." name='message' id="message"/>
                    </div>
                    <Button>Submit</Button>
                </ContactForm>
            </ReactVisibilitySensor>
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
    transition: opacity 600ms, transform 1200ms;
    transform: ${props => props.visible ? 'translateX(0)' : 'translateX(15px)'};
    opacity: ${props => props.visible ? 1 : 0};
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
    @media only screen and (max-width: 850px) {
        width: 85%;
    } 
    @media only screen and (max-width: 700px) {
        & > div {
            flex-direction: column;
        }
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
    @media only screen and (max-width: 700px) {
        padding: 10px;
        font-size: 0.9rem;
    }
`
const TextArea = styled.textarea`
    background: rgb(50, 50, 50, 0.5);
    height: 250px;
    flex: 1;
    font-size: 1rem;
    border: none;
    border-radius: 15px;
    margin: 15px;
    padding: 15px;
    outline: none;
    color: #f7f6e1;
    @media only screen and (max-width: 700px) {
        margin: 10px;
        min-height: 100px;
    }
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