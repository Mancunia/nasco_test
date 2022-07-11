const fs = require('fs');
const path = require('path');
const {toJson} = require("./utils");

let splitted;
fs.readFile(path.join(__dirname, 'nasco_employees.txt'), 'utf8', async function(err, data) {
    if(err) throw err;
    splitted = await data.toString().split("\n");
    splitted.pop();
    console.log(toJson(splitted));
 })

    
 