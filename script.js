/*
Problem 1: NPM and Package.json
Y Explain the purpose of NPM and how it helps in managing packages. Create a simple package.json file for your prou're starting a new project and want to manage your project's dependencies using NPM.oject, specifying the name, version, and a few dependencies of your choice.

*/

const express = require('express');

const app = express();

app.get('/',function(req ,res){
    res.send("chai is ready");
})

app.listen(30001);


