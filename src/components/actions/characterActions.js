// import axios from "axios";
// import {
//     GET_ERRORS
//   } from "./types";
//   import characterReducer from '../reducers/characterReducer'

// export const handleNewCharacterOnSubmit = (userData, history) => dispatch => {
//     axios
//     .post('/users/newcharacter', userData)
//     .then(res => history.push('/character'))
//     dispatch({
//         type: 'ADD_CHARACTER',
//         characterReducer(userData)

//     })
//     .catch(err => {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         })
//     })

// }
