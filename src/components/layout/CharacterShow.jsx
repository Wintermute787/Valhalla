import React, { Component, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import characterBackground from '../assets/characterBackground.jpg'
import {Link} from "react-router-dom";



const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-auto-row: 100px;
grid-gap: 10px;
margin-top: 3em;
`;

const Title = styled.div`
    text-align: center;
    text-transform: uppercase;
    margin-top: 5em;
    letter-spacing: 2rem;
    font-weight: 100;
`

var heroBox = {
    minHeight: "100%",
    minWidth: '1024px',
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    position: "absolute",
    backgroundImage: `url(${characterBackground})`,
    overflowY: 'scroll',
    backgroundSize: "cover"
};

var formStyle = {
    backgroundColor: 'white'
}

const useStyles = makeStyles(theme => ({
    card: {
        width: 345,
        overflow: 'hidden',
        gridColumn: 'span 1',
        gridRow: 'span 1',
        backgroundColor: '#D50000',
        color: 'white',
        marginTop: '3rem'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    media: {
        height: 300,
        
    },
    button: {
        margin: theme.spacing(1),

    },
    input: {
        display: 'none',
    }
}))


const CharacterShow = (props) => {
    const classes = useStyles();
    console.log(props);
    // console.log(state.getState())
    const characterKeys = Object.keys(props.charactersList)
    const [editing, setEditing] = useState(null)

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [level, setLevel] = useState('');
    const [items, setItems] = useState('');
    const [race, setRace] = useState('');
    const [image, setImage] = useState('');


    function handleEditNewCharacter() {
        props.dispatch({
            type: 'EDIT_CHARACTER',
            id: editing,
            name: name,
            job: job,
            level: level,
            race: race,
            image: image,
            items: items.toString().split(','),
            
        })
        
    }

    return (
        <div style={heroBox}>
            <Container>
                <Title>
                <h4 style={{color: 'black', textTransform: 'uppercase', fontSize: '4em', fontFamily: 'Apple Color Emoji', textShadow: '2px 4px 3px rgba(0,0,0,0.3)', textAlign:'center'}}>
                Characters
            </h4>
                </Title>
                <Wrapper>

                    {characterKeys.map(characterId => {
                        let character = props.charactersList[characterId];
                        return editing !== characterId ?
                        <div key={characterId}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={character.image}
                                        title="Contemplative Reptile"/>
                                    <CardContent>
                                        <Typography style={{letterSpacing: '1rem', textAlign: 'center', textTransform: 'uppercase'}}gutterBottom variant="h5" component="h2">
                                        {character.name}
                                    </Typography>
                                        <Typography style={{textAlign: 'center', textTransform: 'uppercase'}}gutterBottom variant="h5" component="h2">
                                            {character.race}
                                        </Typography>
                                        <Typography style={{ textAlign: 'center', textTransform: 'uppercase'}}gutterBottom variant="h6" component="h2">
                                            Items:
                                        </Typography>
                                        <Typography style={{ columnCount: '3'}} variant="body2"  component="p">
                                            {character.items.map(item =>
                                                <li style={{display: 'flex'}}>{item}</li>)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="black">
                                        Level: {character.level}
                                    </Button>
                                    <Button size="small" color="black">
                                        {character.job}
                                    </Button>
                                </CardActions>
                            </Card>
                            <Button
                            variant="contained" color="secondary" className={classes.button}
                             onClick={() => {
                                setEditing(characterId)
                                setName(character.name)
                                setJob(character.job)
                                setLevel(character.level)
                                setItems(character.items)
                                setRace(character.race)
                                setImage(character.image)
                            }}>Edit</Button>
                        </div>
                        :
                            <div style={formStyle} key={characterId}>
                                <h1>
                                    <input defaultValue={name} onChange={event => setName(event.target.value)}></input>
                                </h1>
                                <h2>
                                    <input defaultValue={job} onChange={event => setJob(event.target.value)}></input>
                                </h2>
                                <h2>
                                    <input defaultValue={level} onChange={event => setLevel(event.target.value)}></input>
                                </h2>
                                <h2>
                                    <input defaultValue={race} onChange={event => setRace(event.target.value)}></input>
                                </h2>

                            <TextField
                                id="standard-multiline-flexible"
                                label='Items'
                                margin="normal"
                                className={classes.textField}
                                Value={items}
                                onChange={event => setItems(event.target.value)}/>

                            <Button
                                variant="contained" color="secondary" className={classes.button}
                                onClick={() => props.dispatch({ type: 'DELETE_CHARACTER', id: characterId })}>Delete
                            </Button>

                            <Button
                                onClick={() => {
                                    handleEditNewCharacter()
                                    console.log(characterId)
                                    setEditing(null);
                                }}>Submit</Button>
                        </div>
                    })}
                </Wrapper>
                <Link to='/dashboard'>
                <Button variant="contained" color="secondary" style={{marginTop: '3rem'}} className={classes.button}>
                    Back to Dashboard
                </Button>
                </Link>
            </Container>
        </div>
    )
};


CharacterShow.propTypes = {
    dispatch: PropTypes.func,

}

const mapStateToProps = state => {
    return {
        charactersList: state.characters.characterById,
    }
}



export default connect(mapStateToProps)(CharacterShow)
