const { body, validationResult } = require("express-validator");

const playersService = require("../services/players.service");

exports.validate = ( method ) => {
    switch ( method ) {
        case "signup": {
            return [
                body("playerName", 'No name was entered').exists().notEmpty().toLowerCase().isString(),
            ]
        }    
            break;
    
        default:
            break;
    }
}

exports.signup = async (req, res, next ) => {

    try{

        const errors = validationResult(req);

        const data = {
            playerName: req.body.playerName
        };
        
        playersService.signup( request , (error, result) => {
            return (
                res.status(200).json({
                    success: true,
                    data: results,
                    error: error
                })
            )
        })
    } catch (err) {
        return next(err)
    }
}