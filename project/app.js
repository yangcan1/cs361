/*
    SETUP
*/

// Express
var express = require('express');
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

PORT = 5050;

// PORT = 5080;

// Database

// Handlebars
const { engine } = require('express-handlebars');
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates

/*
    Get Page ROUTES (Successful!)
*/

app.get('/', function(req, res)
    {  
        res.sendFile(__dirname + '/public/index.html')
    });                                                          


/*
    Add ROUTES
*/

app.post('/calories', function(req, res) {
    let data = req.body
    console.log(data)
    

    res.redirect('calculation.html')
})


app.get('*', function (req, res) {
    res.status(404).sendFile(__dirname + '/public/404.html')
  });

/*
    LISTENER
*/
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});

