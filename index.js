var express = require("express");
var app = express();
var session = require("express-session");
var flash = require("express-flash");
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');

//CONFIGURAÇÃO BODY-PARSER
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//CONFIGURAÇÃO EXPRESS-SESSION
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

//CONFIGURAÇÃO EXPRESS-FLASH  
app.use(flash())

app.get("/",(req,res) => {
    console.log("Está rodando...");
    res.send("Rodando...");
})

app.listen(5678,(req, res) => {
    console.log("Servidor rodando!")
})