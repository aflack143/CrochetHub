const express = require('express');
const app = express();
const routes = require('./routes');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/member', routes.member);
app.use('/', routes.pattern);


app.listen(3000, () => {
    console.log('Listening, Ready in 3..2..1..Crochet!');
});