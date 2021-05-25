require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');


const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride("_method"));

app.get('/', (req, res) => {
    res.render('member/index.ejs')
});

app.use('/member', routes.member);
app.use('/pattern', routes.pattern);
app.use('/auth', routes.auth);

app.listen(process.env.PORT, () => {
    console.log('Listening, Ready in 3..2..1..Crochet!');
});