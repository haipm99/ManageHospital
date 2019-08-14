const express = require('express');

const utf8 = require('utf8');
const router = express.Router();

// model 

const { Employee } = require('../../models/model_employee');
const { Room } = require('../../models/model_room');
//api : createEmployee
//url : /api/emp/addEmployee
router.post('/addEmployee', (req, res) => {
    const { fullName, empID, sex, dob, major, position, roomName } = req.body;
    console.log(roomName + "  " + position);
    Room.findOne({ roomName })
        .then(room => {
            if (room) {
                const roomID = room._id;
                Employee.findOne({ empID })
                    .then(emp => {
                        if (emp) {
                            res.status(400).json({ msg: 'Emp have exist' });
                        } else {
                            const newEmp = new Employee({
                                fullName, empID, sex, dob, major, position, roomID
                            });
                            newEmp.save()
                                .then(emp => { res.status(200).json({ emp }) })
                                .catch(console.log);
                        }
                    })
            }
            else {
                res.status(400).json({ msg: 'room not found' })
            }
        })
})

//api: getAllEmp
//url : /api/emp/getAllEmp

router.get('/getAllEmp', (req, res) => {
    Employee.find()
        .then(emps => {
            if (emps != []) {
                res.status(200).json({ emps });
            } else {
                res.status(400).json({ msg: 'Empty array emp' });
            }
        }).catch(console.log)
})



module.exports = router;