const jwt = require('jsonwebtoken')

exports.signup = (playerName , callback) => {

    const tokenList = [
        'dkJyLrCqyvnrAEEa33OqmawRM0U8fvYm',
        '5iPCVaUaokcXF1QrppA11mjfcQpKb50z',
        'sxImIBwLe1pHUgeVbUOyPw7kLHEyUklG',
        'PYI1043KU6PchPFl5qIXPJnyZWEbU99r',
        'EAQFM1tbn0BNG86nLsE2FGsz5S9xS6Fy',
        'E6FMgySr0oRslkd4up0urTpflCG0n11z',
        '1boMwDhZTLHuUx6k6xWltzCJtC6rAp7r',
        'C1QdZDViz53pivlygvdWcHxOC0yL7aMi'
        ]

    const tokenKey = tokenList[Math.floor(Math.random() * tokenList.length)]

    const token = jwt.sign(
        { 
            playerName: playerName 
        },
        tokenKey,
        {
            expiresIn: '1h',
        }
    )

    return callback(token, 'token fetched')
}