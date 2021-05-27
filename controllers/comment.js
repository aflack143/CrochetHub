const Member = require('../models').Member;
const Pattern = require('../models').Pattern;
const Comment = require('../models').Comment;
const Avatar = require('../models').Avatar;
const Design = require('../models').Design;


const postComment = (req, res) => {
    Comment.create(req.body, {
        include: [{
            model: Member,
            attributes: ['id','username'],
            include: [{
                model: Avatar,
                attributes: ['id','imgName','imgUrl'] 
            }]
        },
        {
            model: Pattern,
            attributes: ['id','patternType'] 
        }]
    }).then(comment => {
        Pattern.findAll(req.body, {
            where: { 
                id: req.body.patternId },
            returning: true, 
            plain: true
            }).then(pattern => {
            console.log(comment);
            res.redirect(`/pattern/${req.body.patternType}/${req.body.patternId}`)
        });
    });
};

module.exports = { postComment};