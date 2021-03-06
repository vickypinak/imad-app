var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
  user : 'pinakbagchi115',
  database : 'pinakbagchi115',
  host : 'db.imad.hasura-app.io',
  port : '5432',
  password : process.env.DB_PASSWORD 
};  

var app = express();
app.use(morgan('combined'));



var pool = new Pool(config);

app.get('/db-test',function(req,res){

    pool.query('SELECT * FROM test',function (err,result){
        if(err){
            res.status(500).send(err.toString());
        } 
        else {
            res.send(JSON.stringify(result.rows));
        }
    });    
});

var names = [];
app.get('/submit-name',function(req,res){           //takes submit-name?name=xxxx
    
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
                                                    //NewSearchTab
app.get('/newSearch',function(req,res){
    res.sendFile(path.join(__dirname, '/ui','search.html'));
});



var contents = {
  'article-one': {
        title: 'Article-One | Pinak Bagchi' ,
        date: 'March 1, 2018',
        paragraph:
        `<pr>
               <h2> This is article one</h2>
               
            </pr>`
  }  ,
  'article-two': {
        title: 'Article-two | Pinak Bagchi' ,
        date: 'March 2, 2018',
        paragraph:`<pr>
               <h2> This is article two</h2>
               
            </pr>`
  }  ,
  'article-three': {
        title: 'Article-three | Pinak Bagchi' ,
        date: 'March 3, 2018',
        paragraph:`<pr>
               <h2> This is article three</h2>
               
            </pr>`
  }  
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var paragraph = data.paragraph;
    
    var htmlTemplate = `
    <!doctype html>
<html>
    <head>
        <title>
            ${title}
            <meta name = "viewport" content = "width = device-width, initial-scale = 1"/>
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    
    <body>
        <a href = "/"> Home </a>
        <hr>
        <div class="container">
            <p> Date : ${date}</p>
            ${paragraph}
        </div>
         <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>  `;

return htmlTemplate;
}
                                                            // counter work done here
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

                                                            // Displaying articles from js - serverside
app.get('/:articleName', function(req,res){
    
    var articleNames = req.params.articleName;
    res.send(createTemplate(contents[articleNames]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/sideMain.js',function(req,res){                //sideMain for search
    res.sendFile(path.join(__dirname,'ui','sideMain.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
