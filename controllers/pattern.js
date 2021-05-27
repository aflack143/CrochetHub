const Member = require('../models').Member;
const Pattern = require('../models').Pattern;
const Comment = require('../models').Comment;
const Avatar = require('../models').Avatar;
const Design = require('../models').Design;

const index = (req, res) => {
    Pattern.findAll().then(pattern => {
        Member.findAll().then(member => {
            res.render('index.ejs', {
                pattern,
                member
            })
        });
    });
};

const renderNew = (req, res) => {
    Member.findAll().then(member => {
        Design.findAll().then(design => {
            res.render('create.ejs', {
                member,
                design
            })
        })
    })
};

const postNew = (req, res) => {
        Pattern.create(req.body, {
            include: [{
                model: Member,
                attributes: ['id','username'] 
            }]
        }).then(newPattern => {
            Member.findAll().then(member => {
                res.redirect(`/pattern/${newPattern.patternType}/${newPattern.id}`)
        });
    });
};

const showPattern = (req, res) => {
    Pattern.findByPk(req.params.index, {
        include: [{
            model: Member,
            attributes: ['id','first_name','aboutMe','profileImg'],
            include: [{
                model: Avatar,
                attributes: ['id','imgName','imgUrl'] 
            }] 
        },
        {
            model: Design,
            attributes: ['id','imgName','imgUrl'] 
        },
        {
            model: Comment,
            attributes: ['id','memberId','content','patternId'],
            include: [{
                model: Member,
                include: [{
                    model: Avatar,
                }]
            }]
        }]
    }).then(pattern => {
        Member.findAll().then(member => {
            Design.findAll().then(design => {
                Comment.findAll().then(comment => {
                res.render('pattern.ejs', {pattern, member, design, comment})
            })
        })
        })
    })
};

const renderEdit = (req, res) => {
    Pattern.findByPk(req.params.index, {
        include: [
            {
                model: Member,
                attributes: ['id','first_name','aboutMe','profileImg'],
                include: [{
                    model: Avatar,
                    attributes: ['id','imgName','imgUrl'] 
                }] 
            },
            {
                model: Design,
                attributes: ['id','imgName','imgUrl'] 
        }]
    }).then(pattern => {
        Member.findAll().then(member => {
            Design.findAll().then(design => {
                res.render("edit.ejs", { pattern, member, design });
            })
        })     
    })
};

const postEdit = (req, res) => {
    Pattern.update(req.body, {
        where: { 
            id: req.params.index },
        returning: true, 
        plain: true
        }
        ).then(pattern => {
            console.log(pattern);
            res.redirect(`/pattern/${pattern[1].dataValues.patternType}/${pattern[1].dataValues.id}`);
    }).catch(err => {console.log(err)})
};

const deletePattern = (req, res) => {
    Pattern.destroy({where: { id: req.params.index }}).then(() => {
        res.redirect('/');
    });
};

    module.exports = {
        index,
        renderNew,
        postNew,
        showPattern,
        renderEdit,
        postEdit,
        deletePattern
    }