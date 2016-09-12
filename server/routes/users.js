import express from 'express';
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

let router = express.Router();

let validateInput = (data) => {
    let errors = {};

    console.log("BEGGINING VALIDATION")
    console.log(typeof(data.username));

    if (Validator.isNull(data.username)){
        errors.username = 'this field is required';
    }
    if (Validator.isNull(data.username)){
        errors.email = 'this field is required';
    }
    if (!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if (Validator.isNull(data.password)){
        errors.password = 'this field is required';
    }
    if (Validator.isNull(data.passwordConfirmation)){
        errors.passwordConfirmation = 'this field is required';
    }
    if (Validator.isNull(data.timezone)){
        errors.passwordConfirmation = 'this field is required';
    }

    if (!Validator.equals(data.passwordConfirmation, data.password)) {
        errors.password = 'The passwords must match'
    }

    console.log("ENDING VALIDATION")

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req,res) => {
    console.log("HAD REQUEST")
    console.log(req.body);
    const {errors, isValid} = validateInput(req.body)

    if (!isValid){
        res.status(400).json(errors);
    }
});

export default router;
