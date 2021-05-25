require('dotenv').config();

const Member = require('../models').Member;
const Avatar = require('../models').Avatar;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Pattern = require('../models').Pattern;
// const Comment = require('../models').Comment;


const editMember = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            res.status(500).json(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) {
                res.status(500).json(err);
            }
            req.body.password = hashedPwd;
            Member.update(req.body, { where: {
                id: req.params.index },
                returning: true, 
                plain: true
            }).then(updatedMember => {
                const token = jwt.sign(
                    {
                        username: updatedMember.username,
                        id: updatedMember.id
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '30 days'
                    },
                );
                console.log(token);
                Avatar.findAll().then(avatar => {
                res.redirect(`/member/profile/${updatedMember[1].dataValues.id}`)
                })
                .catch(err => {
                    res.render('member/signup.ejs', {
                        msg: 'Username taken'
                    })
                })
            })
        });
    });
};




const signup = (req, res) => {res.render('auth/signup.ejs')};
    
const postSignup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            res.status(500).json(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) {
                res.status(500).json(err);
            }
            req.body.password = hashedPwd;
            Member.create(req.body).then(newMember => {
                const token = jwt.sign(
                    {
                        username: newMember.username,
                        id: newMember.id
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '30 days'
                    },
                );
                console.log(token);
                res.redirect(`/member/profile/${newMember.id}`)
                })
            .catch(err => {
                res.render('member/signup.ejs', {
                    msg: 'Username taken'
                })
            })
        });
    });
};


const login = (req, res) => {res.render('auth/login.ejs')};

const postLogin = (req, res) => {
    Member.findOne({where: { username: req.body.username }}).then(foundMember =>{
        if (foundMember) {
            bcrypt.compare(req.body.password, foundMember.password, (err, match) => {
                if (match) {
                    const token = jwt.sign(
                        {
                            username: foundMember.username,
                            id: foundMember.id
                        },
                        process.env.JWT_SECRET,
                            {
                                expiresIn: '30 days'
                            },
                    );
                    console.log(`Token: ${token}`);
                    res.redirect(`/member/profile/${foundMember.id}`);
                } else {
                    res.send("Incorrect password");
                }
            });
        };
    });
};

module.exports = {
    signup,
    postSignup,
    login, 
    postLogin,
    editMember
}