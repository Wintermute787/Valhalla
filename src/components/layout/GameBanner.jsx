import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import sideImage from '../assets/sideimage1.jpg'
import sideImage2 from '../assets/sideimage2.jpg'
import Button from '@material-ui/core/Button';
import { connect} from 'react-redux';
import side3 from '../assets/side3.webp'


const BodyBanner = styled.div`
display: grid;
font-family: arial;
grid-template-rows: 100px 100px 300px;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 1.5rem;
background-color: white;

box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const Header = styled.div`
grid-column-start: 1;
grid-column-end: 4;
grid-row-start: 1;
grid-row-end: 2;
padding: 2% 20px;
background: #f50057;
color: white;
text-align: center;
text-transform: uppercase;
letter-spacing: 8px;
font-weight: lighter;
font-size: 1.5rem;
text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
`

const Side = styled.div`
 
background-image: url(${side3});
    background-position: center;
    padding: 2% 20px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
`

const Content = styled.div`

grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 4;
    text-align: center;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 100;
    padding: 1% 3%;
    fontSize: 4em;
    letter-spacing: 1px;
     font-family: Apple Color Emoji;
     text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
`

const ButtonSpacing = styled.div`
    display: flex;
    justify-content: space-around;
`

const GameBanner = (props) => {
    return (
        <BodyBanner>
            <Header className="red accent-4">Choose Your Game</Header>
            <Content>
            <h2>Join with friends!</h2>
                <p>Browese the games section and take a look at who is recruiting. Our DM's are ready to share their worlds of action and adventure with you.</p>
            </Content>
            <Side></Side>
        </BodyBanner>
    )
}

export default connect(null)(GameBanner);