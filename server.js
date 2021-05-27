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

app.use('/auth', routes.auth);
app.use('/member', routes.member);
app.use('/comment', routes.comment);
app.use('/', routes.pattern);

app.listen(process.env.PORT, () => {
    console.log('Listening, Ready in 3..2..1..Crochet!');
});