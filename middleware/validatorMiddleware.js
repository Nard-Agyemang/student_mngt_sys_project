const {checkSchema , validationResult } = require("express-validator");
const { schema } = require("../models/Department");


const checkErrors = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({ errors: errors.array() });
    }

    next();

}

const validateSchema = (schema) => {
    return [checkSchema(schema), checkErrors];
}


module.exports = validateSchema;