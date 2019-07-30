import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import sideImage from '../assets/sideimage1.jpg'
import sideImage2 from '../assets/sideimage2.jpg'

const BodyBanner = styled.div`
display: grid;
font-family: arial;
grid-template-rows: 100px 100px 300px;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 1.5rem;
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
`

const Side = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;
    background-image: url(${sideImage2});
    background-position: cover;
    padding: 2% 20px;
`

const Content = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    text-align: center;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 100;
    padding: 1% 3%;
`




const DashboardBanner = (props) => {
    return(
        <BodyBanner>
            <Header>Create Your Characters</Header>
            <Side></Side>
            <Content>
                <h2>Make your path your own!</h2>
                <p>With our character creater, you will be able to create, save, and export your characters to various games</p>
            </Content>
        </BodyBanner>
    )
}

export default DashboardBanner;