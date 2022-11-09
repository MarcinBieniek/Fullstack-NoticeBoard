const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const getImageFileType = require('../utils/getImageFileType')

exports.register = async (req, res) => {
    try {    
        const { login, password } = req.body;
        const fileType = req.file ? await getImageFileType(req.file) : 'unknown';

        if (login && typeof login === 'string' && password && typeof password === 'string' && req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)) {
            const userWithLogin = await User.findOne({ login });
            if (userWithLogin) {
                return res.status(409).send({ message: 'User with this login already exists'});
            }

            const user = await User.create({ login, password: await bcrypt.hash(password, 10), avatar: req.file.filename});
            res.status(201).send({ message: "User created" + user.login})
        } else {
            res.status(400).send({ message: 'Bad request'})
        }
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { login, password } = req.body
        if (login && typeof login === 'string' && password && typeof password === 'string') {
            const user = await User.findOne({ login });
            if (!user) {
                res.status(400).send({ message: 'Login or password are incorrect' });
            }
            else {
                if (bcrypt.compareSync(password, user.password)) {
                    req.session.login = user.login;
                    req.session.save();
                    res.status(200).send({ message: 'Login succesful' });
                } 
                else {
                    res.status(400).send({ message: 'Login or password are incorrect' })
                }
            }
        } else {
            res.status(400).send({ message: 'Bad request' });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }

}

exports.getUser = async (req, res) => {
    res.send('yeah I\'m logged')
}

exports.logout = async (req, res) => {
    try {
        req.session.destroy();
        return res.status(200).send({ message: 'Session ended' });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}