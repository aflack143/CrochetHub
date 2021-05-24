const Member = require('../models').Member;
const Pattern = require('../models').Pattern;
const Comment = require('../models').Comment;

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
    res.render('create.ejs')
};

const postNew = (req, res) => {
    console.log(req.body);
    Pattern.create(req.body).then(newPattern => {
        res.redirect(`/pattern/${newPattern.patternType}/${newPattern.id}`)
    });
};

const showPattern = (req, res) => {
    Pattern.findByPk(req.params.index, {
        include: [{
            model: Member,
            attributes: ['id','first_name','aboutMe'] 
        }]
    }).then(pattern => {
        Member.findAll().then(allMembers => {
            res.render('pattern.ejs', {pattern, member: allMembers})
        })
    })
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
        deletePattern
    }