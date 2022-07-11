const fs = require('fs');
const path = require('path');
const {toJson} = require("./utils");

const file = "../nasco_employees.txt"

let splitted;

fs.readFile(path.join(__dirname,file), 'utf8', async function(err, data) {
    if(err) throw err;
    splitted = await data.toString().split("\n");
    splitted.pop();
    console.log(toJson(splitted));
 })


 const readAll = async (req,res)=>{
    try {

        
    } catch (error) {
        
    }
 }
