
const {toJson,readFile,writeFile} = require("../utils");



 const readAll = async (req,res)=>{
    /*
    0.get data from file
    1. format to js obj and return
    */ 
    try {
    let data =await readFile();
    if(!data){
      throw {status:500, message:"Error reading File"}
    }

    let query = req.query.keyword;

    if(query){
      data = await data.filter(record=>record.includes(query));
    }
    if(data.length==0){
      throw {status:404,message:"Not found"};
    }

    res.status(200).json(toJson(data));

    } catch (error) {
        res.status(error.status||500).json({message:error.message})
    }
 }


 const newRecord = async(req,res)=>{
   try {
      let data =await readFile();
    if(!data){
      throw {status:500, message:"Error reading File"}
    }

    let {firstName,lastName,address,phone,email,date_of_birth} = req.body;

    let record = `${data.length+1},${firstName},${lastName},${address},${phone},${email},${date_of_birth}`;

    let dataJson= toJson(data);

   //  console.log(dataJson.filter(record=>record.phone ==phone||record.email==email)?record:null);

   // dataJson.forEach(record=>console.log(record));

   //  if(dataJson.filter(record=>record.phone ==phone))
   //  {
   //    throw {status:403,message:"Email or Phone number exist's already"}
   // }
    data.push(record);

    let response = await writeFile(data);

    if(!response){
      throw {status:500,message:"Error updating Record"}
    }

   res.status(200).json({message:"Successfully added new record"})      
   } catch (error) {
      res.status(error.status).json({message:error.message})
   }

 }

 


 module.exports={
    readAll,
    newRecord
 }