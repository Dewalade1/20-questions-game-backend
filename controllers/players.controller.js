const { body, validationResult } = require("express-validator");

const playersService = require("../services/players.service");

exports.validate = ( method ) => {
    switch ( method ) {
        case "signup": {
            return [
                body("playerName", 'Incorrect player name format entered').exists().notEmpty().toLowerCase().isString(),
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

        const playerName = req.body.playerName

        
        playersService.signup( playerName , (token, result) => {
            return (
                res.status(200).json({
                    success: true,
                    info: result,
                    data: {
                        playerName: playerName,
                        token: token
                    }
                })
            )
        })
    } catch (err) {
        return next(err)
    }
}

exports.auth = async (req, res, next ) => {

    try{

        const playerName = req.body.playerName

        const errors = validationResult(req)

        playersService.auth( playerName , (error, result) => {

            return res.status(200).send(result)

        })
    } catch (err) {
        return next(err)
    }
}
