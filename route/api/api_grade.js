const express = require('express');
const router = express.Router();

//import model

const { Grade } = require('../../models/model_grade');
const {Room} = require('../../models/model_room');
//create Grade
router.post('/createGrade', (req, res) => {
    const { gradeName } = req.body;
    Grade.findOne({ gradeName })
        .then(grade => {
            if (grade) {
                res.status(400).json({ msg: 'Name have Exist' });
            } else {
                const newGrade = new Grade({
                    gradeName
                })
                newGrade.save().then(res.status(200).json({ msg: 'create grade success' })).catch(console.log)
}
        })
    .catch(console.log);
})
//
router.get('/getAllGrade',(req,res) => {
    Grade.find()
        .then(arrGrade => {
            if(arrGrade !== []){
                res.status(200).json({arrGrade});
            }else{
                res.status(400).json({msg: 'no grade found'});
            }
        })
})
// api : get room of grade 

router.get('/getRoom/:id',(req,res) => {
    const gradeID = req.params.id;
    Room.find({gradeID})
        .then(room => {
            if(room !== []){
                res.status(200).json({room})
            }
            else{
                res.status(400).json({msg : 'not found room '})
            }
        })
})

module.exports = router