const Member = require('../models').Member;
const Pattern = require('../models').Pattern;
const Avatar = require('../models').Avatar;

const showMember = (req, res) => {
    Member.findByPk(req.params.index, {
        include: [{
            model: Pattern,
        },
        {
            model: Avatar,
        }]
    }).then(member => {
        res.render('member/profile.ejs', {member})
    })
};

const renderEdit = (req, res) => {
    Member.findByPk(req.params.index, {
        include: [{
            model: Pattern,
            attributes: ['memberId','title', 'introContent'] 
        },
        {
            model: Avatar,
        }]
    }).then(member => {
        Avatar.findAll().then(allAvatar => {
            res.render('member/edit.ejs', {member, allAvatar})
        })
    })
};


const deleteMember = (req, res) => {
    Member.destroy({where: { id: req.params.index }}).then(() => {
        res.redirect('/');
    });
};

const editMember = (req, res) => {
    Member.update(req.body, { where: {
        id: req.params.index },
        returning: true, 
        plain: true
    }).then(updatedMember => {
        res.redirect(`/member/profile/${updatedMember[1].dataValues.id}`)
    })
};

module.exports = {
    showMember,
    renderEdit,
    editMember,
    deleteMember
}