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


const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-auto-row: 100px;
grid-gap: 10px;
margin-top: 3em;
`

const useStyles = makeStyles(theme => ({
    card: {
        width: 345,
        overflow: 'hidden',
        gridColumn: 'span 1',
        gridRow: 'span 1',
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
        margin: theme.spacing(1)
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
        <Container>
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
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {character.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {character.items.map(item =>
                                        <p>{item}</p>)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Level: {character.level}
                            </Button>
                            <Button size="small" color="primary">
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
                <div key={characterId}>
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
                    onClick={() => props.dispatch({ type: 'DELETE_CHARACTER', id: characterId })}>Delete</Button>
                    
                <Button 
                onClick={() => {
                    handleEditNewCharacter()
                    console.log(characterId)
                    setEditing(null);
                }}>Submit</Button>
            </div>
            })}
        </Wrapper>
        </Container>
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