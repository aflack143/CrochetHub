const Member = require('../models').Member;
const bcrypt = require('bcryptjs');
// const Pattern = require('../models').Pattern;
// const Comment = require('../models').Comment;

const signup = (req, res) => {
    res.render('auth/signup.ejs')};

const postSignup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) return res.status(500).json(err);
            req.body.password = hashedPwd;
        Member.create(req.body).then(newMember => {
            res.redirect(`/member/profile/${newMember.id}`)
            })
            .catch(err => {
                console.log(err);
                res.send(`err ${err}`);
            })
        });
    });
};

const login = (req, res) => {
    res.render('auth/login.ejs')
};

const postLogin = (req, res) => {
    Member.findOne({where: { username: req.body.username }}).then(foundMember =>{
        if (foundMember) {
            bcrypt.compare(req.body.password, foundMember.password, (err, match) => {
                if (match) {
                    res.redirect(`/member/profile/${foundMember.id}`);
                } else {
                    return res.sendStatus(400);
                }
            });
        };
    });
};
// res.redirect("/auth/login");}
//         } else {
//             res.redirect("/auth/login");
//         }
//     }
// )};


module.exports = {
    signup,
    postSignup,
    login, 
    postLogin,
}