import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect} from 'react-redux';
import { Container } from '@material-ui/core';


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


const GameShow = (props) => {
    const gameKeys = Object.keys(props.game)
    return(
        <div>
            <Container>
            <h4 style={{color: 'black', textTransform: 'uppercase', fontSize: '4em', fontFamily: 'Apple Color Emoji', textShadow: '2px 4px 3px rgba(0,0,0,0.3)', textAlign:'center'}}>
                Choose your game!
            </h4>
            <Link to='/dashboard'>
              <button
                style={{
                  width: "150px",
                  
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                
                className="btn btn-large waves-effect waves-light hoverable red accent-4" >
                Back
              </button>
              </Link>
              </Container>
        {gameKeys.map(gameId => {
            let games = props.game[gameId]
            return <div>
                <Container>
            <BodyBanner>
            <Header className="red accent-4">{games.name}</Header>
            <Content>
            <h7>{games.levels}</h7>
                <p>{games.description}</p>
            </Content>
            <Side>
                <img src={games.image}
                width={500}
                height={300}>
                </img>
            </Side>
        </BodyBanner>
        </Container>
        </div>
        })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        game: state.games.gameById
    }
}

export default connect(mapStateToProps)(GameShow);