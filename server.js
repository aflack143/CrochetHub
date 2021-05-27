require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride("_method"));

const verifyToken = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedMember) => {
            if (err || !decodedMember) {
                // return res.status(401).json({ error: 'Unauthorized Request'});
                res.send(err);
            }
            req.user = decodedMember;
            console.log(decodedMember);
            next();
        }
    )
}

app.use('/auth', routes.auth);
app.use('/member', routes.member);
app.use('/', routes.pattern);

app.listen(process.env.PORT, () => {
    console.log('Listening, Ready in 3..2..1..Crochet!');
});