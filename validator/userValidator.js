// refer to other validation schema for explanation

const User = require('../models/userModel');

const userValidationSchema = {
    name: {
        notEmpty: {
            bail: true,
            errorMessage: 'Name is required',
        },
        isLength: {
            errorMessage: 'Name must be between 3 and 100 characters',
            min: 3,
            max: 100,
        },
    },
    email: {
        isEmail: {
            bail: true,
            errorMessage: 'Invalid email format',
        },
        /**
         * This code snippet implements a custom validation rule within the userValidationSchema for the email field. 
         * Its purpose is to ensure that the provided email address is not already registered in the database.
         */
        custom: { // This key specifies a custom validation rule. Express Validator allows you to define custom validation logic beyond the built-in validators
            /**
             * This defines the custom validation function. 
             * It's an asynchronous function because it needs to query the database, which is an asynchronous operation. 
             * The value parameter represents the email address being validated.
             */
            options: async (value) => {
                // This line queries the database to check if a user with the provided email address already exists.
                const existingUser = await User.findByEmail(value);
                if (existingUser) {
                    // If a user with the email already exists, this line throws an error. 
                    // This error signals to Express Validator that the validation has failed. 
                    // The error message "Email already in use" will be included in the validation error response returned to the client.
                    throw new Error('Email already in use');
                }
                /**
                 * If no user is found with the given email (meaning the email is available), the function returns true. 
                 * This indicates to Express Validator that the validation has passed
                 */
                return true;
            },
        },
    },
    password: {
        isLength: {
            errorMessage: 'Password must be at least 8 characters long',
            min: 8,
        },
    },
};

/**
 * This userValidationSchema is intended to be used with the checkSchema middleware from Express Validator. 
 * When checkSchema is applied to a request, it runs all the defined validation rules, including this custom rule. 
 * If this custom validation function throws an error, Express Validator will add that error to the list of validation errors. 
 * If the function returns true, the validation for this specific rule is considered successful.

This custom validation provides a way to enforce email uniqueness at the application level, which is important for user registration and login functionalities. 
It helps prevent duplicate email addresses in your database.
 */

module.exports = userValidationSchema;