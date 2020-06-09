const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send("Welcome to the smart fridge")
});

app.listen(3000,() =>{
    console.log("Smartfridgeapp");
});
