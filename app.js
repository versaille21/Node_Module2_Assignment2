
const express = require('express');
const chalk = require('chalk');

const app = express();
const fs = require('fs');

const port = process.env.PORT || 8085;

app.listen(port, ()=>{
    console.log(chalk.green("App running at port 8085"));
});


app.get('/getMoviesDetails', (req, res)=>{

    fs.readFile('./data-db.json', (err, data)=>{
    if (err){
        res.send("Error : Somethning wrong"+ err);
    }
    else{
        res.send(JSON.parse(data));
    }
    
   
})
});



