const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'), path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route pages
app.get('/:page', function (req, res) {
    var page = req.params.page;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('_layout.ejs', { page: './pages/' + page });
});

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('_layout.ejs', { page: './_home.ejs' });
});

// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});