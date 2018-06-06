var express = require('express');
var app = express();
var port = process.env.PORT || 9999;



app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/"+ 'index.html');
});

app.get('/list', (req, res) => {
   res.sendFile(__dirname + '/json' + '/'+ 'data.json');

});
var ma_liste = "<ul>li>Nom1</li></ul>"

// start the server
app.listen(port,  function () {
    console.log('Server started! At http://localhost:' + port);
});