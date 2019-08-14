const express = require('express');

const router = express.Router();

//models

const { Room } = require('../../models/model_room');
const { Employee } = require('../../models/model_employee');
//api: create Room
// api/room/create
router.post('/createRoom', (req, res) => {
    const { roomName } = req.body;
    Room.findOne({ roomName })
        .then(room => {
            if (room) {
                res.status(400).json({ msg: 'room exist' });
            } else {
                const newRoom = new Room({ roomName });
                newRoom.save()
                    .then((room) => { res.status(200).json({ room }); })
                    .catch(console.log);
            }
        })
});

//api:getAllRoom
// api/room/getAll
router.get('/getAllRoom', (req, res) => {
    Room.find()
        .then(rooms => {
            if (rooms != []) {
                res.status(200).json({ rooms });
            }
            else {
                res.status(400).json({ msg: 'Empty' });
            }
        })
        .catch(console.log);
})

//api : getEmp of roomm
// api/room/getEmpRoom:roomName
ObjectId = require('mongodb').ObjectID;
router.get('/getEmpRoom/:id', (req, res) => {
    const roomID = req.params.id;
    console.log({ roomID })
    Employee.find({ roomID })
        .then(arrEmp => {
            if (arrEmp != []) {
                res.status(200).json({ arrEmp });
            } else {
                res.status(400).json({ mag: `not found emp of ${roomID}` });
            }
        }).catch(console.log);
});

//export
module.exports = router;