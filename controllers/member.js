const Member = require('../models').Member;
const Pattern = require('../models').Pattern;
const Comment = require('../models').Comment;

// const index = (req, res) => {
//     res.render('member/index.ejs')};

// const signup = (req, res) => {
//     res.render('member/signup.ejs')};

// const postSignup = (req, res) => {
//     Member.create(req.body).then(member => {
//         res.redirect(`/member/profile/${member.id}`)
//     })
// };

// const login = (req, res) => {
//     res.render('member/login.ejs')
// };

// const postLogin = (req, res) => {
//     Member.findOne({where: { username: req.body.username }}).then(member =>{
//         if (member) {    
//             if (member.password === req.body.password) {
//                 res.redirect(`/member/profile/${member.id}`);
//             } else {
//                 res.redirect("/member/login");}
//         } else {
//             res.redirect("/member/login");
//         }
//     }
// )};

const showMember = (req, res) => {
    Member.findByPk(req.params.index, {
    }).then(member => {
        Pattern.findAll().then(allPattern => {
            res.render('member/profile.ejs', {member, pattern: allPattern})
})})};

const renderEdit = (req, res) => {
    Member.findByPk(req.params.index, {
        include: [{
            model: Pattern,
            attributes: ['memberId','title', 'introContent'] 
        }]
    }).then(member => {
        Pattern.findAll().then(allPattern => {
            res.render('member/edit.ejs', {member})
})})};

const editMember = (req, res) => {
    Member.update(req.body, { where: {
        id: req.params.index },
        returning: true, 
        plain: true
}).then(updatedMember => {
    res.redirect(`/member/profile/${updatedMember[1].dataValues.id}`)}
)};

const deleteMember = (req, res) => {
    Member.destroy({where: { id: req.params.index }}).then(() => {
        res.redirect('/');
    });
};

module.exports = {
    // index,
    // signup,
    // postSignup,
    // login, 
    // postLogin,
    showMember,
    renderEdit,
    editMember,
    deleteMember
}