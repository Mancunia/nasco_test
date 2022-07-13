const fs = require('fs');
const path = require('path');
require('dotenv').config();


const file = process.env.TEXT_DB;

const toJson = (data)=>{
    const processedData =[];

    data.forEach(data=>{
        let record = data.split(',');
        processedData.push({
            id: record[0],
            firstName: record[1],
            lastName: record[2],
            address: record[3],
            phone: record[4],
            email: record[5],
            data_of_birth:record[6]
        })
    })
    

     return processedData;
    }


    const readFile = async ()=>{
        let splitted;
        // console.log(__dirname);
        try {
            let data = fs.readFileSync(path.join(__dirname,file), 'utf8');

            
                splitted = await data.toString().split("\n");
                // splitted.pop();

                splitted.filter(record=>record!=undefined)
                            
             
            return await splitted;
        } catch (error) {
            throw error.message;
        }
    }

    const writeFile=async(data)=>{
        try {
            fs.writeFile(path.join(__dirname,file), data.join("\n"),(err)=>{
                if(err){throw "Writing File"}

                
               
            });

            return true;

        } catch (error) {
            console.log(error);
            throw error.message
        }
    }

   



module.exports={
    toJson,
    readFile,
    writeFile
}