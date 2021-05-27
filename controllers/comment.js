const Member = require('../models').Member;
const Pattern = require('../models').Pattern;
const Comment = require('../models').Comment;
const Avatar = require('../models').Avatar;

const postComment = (req, res) => {
    Comment.create(req.body, {
        include: [{
            model: Member,
            attributes: ['id','username'],
            include: [{
                model: Avatar,
            }]
        },
        {
            model: Pattern,
            attributes: ['id','patternType'] 
        }]
    }).then(comment => {
            res.redirect(`/pattern/${req.body.patternType}/${req.body.patternId}`)
    });
};

module.exports = { postComment};