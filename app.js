// App.js

/*
    SETUP
*/
var express = require('express');   
var app     = express();          
var db = require('./database/db-connector');
var exphbs = require('express-handlebars');
PORT        = 5461;

app.engine('.hbs', exphbs({                     
    extname: ".hbs"
}));

app.set('view engine', '.hbs'); 

/*
    ROUTES
*/
app.get('/index', function(req, res){
        res.render('index');                    
    });      

app.get('/properties', function(req, res){
        res.render('properties');                    
    });  

app.get('/CompletedLandscapingSessions', function(req, res){
        res.render('CompletedLandscapingSessions');                    
    });  

app.get('/PropertyOwners', function(req, res){
        res.render('PropertyOwners');                    
    });  

app.get('/CrewLeaders', function(req, res){
        res.render('CrewLeaders');                    
    });  

app.get('/Employees', function(req, res){
        res.render('Employees');                    
    });  
/*
    LISTENER
*/
app.listen(PORT, function(){            
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});