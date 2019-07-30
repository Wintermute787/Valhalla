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

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
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
    const keys = Object.keys(props.characterList)
    const [editing, setEditing] = useState(null)

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [level, setLevel] = useState('');
    const [items, setItems] = useState('');
    const [race, setRace] = useState('');
    const [image, setImage] = useState('');

    
    function handleEditNewCharacter(dispatch) {
        dispatch({
            type: 'EDIT_CHARACTER',
            id: editing,
            name: name,
            job: job,
            level: level,
            race: race,
            image: image,
            items: items.split(',')
        })
    }

    return(
        
    <div>{keys.map(characterId => {
                let character = props.characterList[characterId];
                
                
                <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={character.image}
                                    title="character image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {character.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {character.items.map(item => { { item } })}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    {character.job}
                                </Button>
                                <Button size="small" color="primary">
                                    {character.level}
                                </Button>
                            </CardActions>
                        </Card>
                        
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                            setEditing(characterId)
                            setName(character.name)
                            setJob(character.job)
                            setLevel(character.level)
                            setItems(character.items)
                            setRace(character.race)
                            setImage(character.image)
                        }}>Edit</Button>
                        
                    </div>
                
               
            })} 

            </div>)
}


CharacterShow.propTypes = {
    dispatch: PropTypes.func,

}

const mapStateToProps = state => {
    return {
        characters: state.characterById
    }
}


export default connect(mapStateToProps)(CharacterShow)