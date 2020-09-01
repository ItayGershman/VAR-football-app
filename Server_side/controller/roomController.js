const Room = require("../models/Room");

exports.roomController = {
    async createRoom(req,res){
        try {
            room = new Room({
                roomCode: req.body.roomCode,
                matchString:req.body.game
            });
            await room.save(err => {
                if (err) {
                    res.status(500).send(`${err}`);
                } else {
                    res.status(200).json(room);
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getGame(req,res){
        console.log(req.params)
        try {
            const room = await Room.findOne({roomCode:req.params.roomCode})
            console.log(room)
            if(room) res.status(200).json(room.matchString)
            else res.status(400).send(`Did not find room with this room code`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setRoomData(req, res) {
        console.log(req.body)
        try {
            const body = req.body
            let getRoom = await Room.findOne({ roomCode: body.roomCode });
            console.log(`getRoom:${JSON.stringify(getRoom)}`)
            if (getRoom === null) {
                room = new Room({
                    roomCode: body.roomCode,
                    userData: body.userData
                });
                console.log(JSON.stringify(room))
                await room.save(err => {
                    if (err) {
                        res.status(500).send(`${err}`);
                    } else {
                        res.status(200).json(room);
                    }
                });
            }
            else res.status(200).json(getRoom)
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
    async setGamePreview(req, res) {
        console.log(req.body)
        try {
            if (req.body.roomCode === undefined)
                return res.status(400).send(`roomCode is wrong`);
            await Room.updateOne(
                { roomCode: req.body.roomCode },
                { $set: {match: req.body.match }},
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).json(true);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
    async getRoomData(req, res) {
        console.log('getRoomData')
        try {
            const room = await Room.findOne({ roomCode: req.params.roomCode });
            if (room) {
                res.header('Cache-Control', 'no-store');
                console.log(JSON.stringify(room))
                res.status(200).json(room);
            } else res.status(400).json(false);
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
    async login(req, res) {
        const body = req.body
        const fullName = body.fullName
        try {
            const room = await Room.findOne({ roomCode: body.roomCode });
            let obj = room.userData.find(o => o.fullName === fullName);
            if (obj) res.status(200).json(true)
            else res.status(400).json(false)
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async signup(req, res) {
        console.log(req.body.roomCode)
        try {
            if (req.body.roomCode === undefined)
                return res.status(400).send(`roomCode is wrong`);
            Room.updateOne(
                { roomCode: req.body.roomCode },
                { $push: { userData: req.body.userData } },
                (err, docs) => {
                    if (err) res.status(400).send(`${err}`)
                    return res.status(200).json(true);
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
    async checkRoom(req, res) {
        try {
            const room = await Room.findOne({ roomCode: req.params.roomCode });
            if (room) res.json(true)
            else res.json(false)
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setPoints(req,res){
        try {
            Room.updateOne(
                { roomCode: req.body.roomCode },
                { $set: {userData : req.body.userData } },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).json(true);
                    }
                }
             )
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
};
