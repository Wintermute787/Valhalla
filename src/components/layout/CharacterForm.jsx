import React, { useState } from 'react'
import { connect} from 'react-redux';
import uuid from 'uuid'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Route, Redirect } from 'react-router'
import handleNewCharacterOnSubmit from '../actions/characterActions';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: 400,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing(1),
        
      },
  }));

const CharacterForm = (props) => {
    console.log(props);
    const classes = useStyles();
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [level, setLevel] = useState('');
    const [items, setItems] = useState('');
    const [race, setRace] = useState('');
    const [image, setImage] = useState('');
    

    // function handleNewCharacterOnSubmit() {                            
    //     props.dispatch({
    //         type: 'ADD_CHARACTER',
    //         id: uuid.v4(),
    //         name: name,
    //         job: job,
    //         level: level,
    //         race: race,
    //         image: image,
    //         items: items.toString().split(','),
            
    //         })
    //     props.history.push('/character')
    //     }
  function handleNewCharacterOnSubmit() {
      const newCharacter = {
        name: name,
        job: job,
        race: race,
        level: level,
        image: image,
        items: items.toString().split(','),
      }
  }
    

    return (
        <Container>
        <div>
        <form className={classes.container} noValidate autoComplete="off">


        <TextField 
        id="standard-name"
        label="Name"
        
        className={classes.textField}
        onChange={event => setName(event.target.value)}/>


        <TextField 
         id="standard-name"
         label="Job"
         className={classes.textField}
        
         onChange={event => setJob(event.target.value)}/>


        <TextField 
         id="standard-name"
         label="Level"
         className={classes.textField}
         
         onChange={event => setLevel(event.target.value)}/>


        <TextField 
         id="standard-name"
         label="Image"
         className={classes.textField}
         
         onChange={event => setImage(event.target.value)}/>


        <TextField 
         id="standard-name"
         label="Race"
         className={classes.textField}
         
         onChange={event => setRace(event.target.value)}/>

        <TextField 
        id="standard-multiline-flexible"
        className={classes.textField}
        label="Items"
        multiline
        rowsMax="4"
        onChange={event => setItems(event.target.value)}/>


        
        <Button 
        variant="contained"
        color="secondary"
        red accent-4
        className={classes.button}
        onClick={handleNewCharacterOnSubmit}>Submit</Button>
        </form>
        </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        characterData: state.characters
    }
}
export default connect(mapStateToProps)(CharacterForm)