const {Schema,model} = require('mongoose');

const roomSchema = new Schema ({
    roomCode:{
        type:String,
        required:true
    },
    match:{
        home:String,
        homeLogo:String,
        away:String,
        awayLogo:String,
        minute:Number,
        goalsHome:Number,
        goalsAway:Number,
        gameTime:String,
    },
    matchString:{
        type:String
    },
    userData:[{
        fullName:String,
        home:Number,
        away:Number,
        points:Number
        }
    ]
})

module.exports = model('rooms',roomSchema);