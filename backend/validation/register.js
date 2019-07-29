const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //convert empty fields to an empty string so we can use validator functions

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    //name Checks
    if(Validator.isEmpty(data.name)) {
        errors.name = "name filed is required";
    }

    //email checks
    if(Validator.isEmpty(data.email)) {
        errors.email = "email field is required" 
    }else if (!Validator.isEmail(data.email)) {
        errors.email = "email is not valid"
    }

    //password checks

    if(Validator.isEmpty(data.password)) {
        errors.password = "password field is required"
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "confirm password field is required"
    }

    if(!Validator.isLength(data.password, {min: 3, max: 30})){
        errors.password = "password must be at least 3 characters"
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}