const express = require('express');

const router = express.Router();

//model:

const { Account } = require('../../models/model_account');

//api : login

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Account.findOne({ $and: [{ username }, { password }] })
        .then(user => {
            if (user) {
                res.status(200).json({ msg: 'login success', fullName:user.fullName });
            } else {
                res.status(400).json({ msg: 'Wrong user or password' });
            }
        })
})

//api : register

router.post('/register', (req, res) => {
    const { username, password, fullName } = req.body;
    Account.findOne({ username })
        .then(user => {
            if (user) {
                res.status(400).json({ msg: 'Account Have Exist' });
            } else {
                const newAccount = new Account({ username, password, fullName });
                newAccount.save().then(user => { res.status(200).json({ user }) }).catch(console.log);
            }
        })
})

//export

module.exports = router;