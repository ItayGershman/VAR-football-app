const express = require('express');
var router = express.Router();
const {roomController} = require('../controller/roomController')

router.post('/createRoom',(req,res)=>{
    roomController.createRoom(req,res);
})

router.get('/game/:roomCode',(req,res)=>{
    roomController.getGame(req,res)
})

router.post('/user_data', (req, res) => {
    roomController.setRoomData(req, res);
});
router.post('/game_preview', (req, res) => {
    roomController.setGamePreview(req, res);
});

router.get('/room_data/:roomCode', (req, res) => {
    roomController.getRoomData(req, res);
});

router.post('/login',(req,res) => {
    roomController.login(req,res);
})

router.post('/signup',(req,res) => {
    roomController.signup(req,res);
})

router.get('/check_room/:roomCode',(req,res) => {
    roomController.checkRoom(req,res);
})

router.post('/points',(req,res)=>{
    roomController.setPoints(req,res);
})

module.exports = router
