
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
   /*
   0.get body from req
   1. concat to body to string
   2. format to js object
   3. check for duplicates
      3.1. if no, step 4
   4. push to array
   5. write to file
   */ 
   try {
      let data =await readFile();
    if(!data){
      throw {status:500, message:"Error reading File"}
    }

    let {firstName,lastName,address,phone,email,date_of_birth} = req.body;
    const jsonForm = toJson(data);

    console.log(jsonForm)
    console.log('new id:'+parseInt(jsonForm[jsonForm.length-1].id)+1)

    let record = `${parseInt(jsonForm[jsonForm.length-1].id)+1},${firstName},${lastName},${address},${phone},${email},${date_of_birth}`;

    let dataJson= toJson(data);

            //  console.log(dataJson.find(record=>record.phone ==phone||record.email==email)?record:null);

            // dataJson.forEach(record=>console.log(record));

             if(dataJson.find(record=>record.phone ==phone||record.email==email))
             {
               throw {status:403,message:"Email or Phone number exist's already"}
            }

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


 const Update_Record = async(req,res)=>{
  /*
  0.read file to get data
  1.get body from req
  2.get id from req
  3.find record with id
  4.update record
  5.write to file
  */ 

  try {
    let data =await readFile();
    if(!data){
      throw {status:500, message:"Error reading File"}
    }
    const record = toJson(data);
    let {id,firstName,lastName,address,phone,email,date_of_birth} = req.body;

   record.forEach(record=>{
      if(record.id==id){
        if(firstName)record.firstName=firstName;
        if(lastName)record.lastName=lastName;
        if(address)record.address=address;
        if(phone)record.phone=phone;
        if(email)record.email=email;
        if(date_of_birth)record.data_of_birth=date_of_birth;
      }

    });

    let newdata = record.map(record=>`${record.id},${record.firstName},${record.lastName},${record.address},${record.phone},${record.email},${record.data_of_birth}`);


    let response = await writeFile(newdata);

    if(!response){
      throw {status:500,message:"Error updating Record"}
    }

   res.status(200).json({message:"Successfully updated record"})   
  
  // res.status(200).json({toJson:newdata})   
    
  } catch (error) {
    res.status(error.status).json({message:error.message})
  }
 }
 

 const Drop_Record = async(req,res)=>{
  /*
  0.read file to get data
  1.get id from req
  2.find record with id
  3.delete record
  4.write to file
  */
  try {
    let data =await readFile();
    if(!data){
      throw {status:500, message:"Error reading File"}
    }
    const record = toJson(data);
    let {id} = req.body;
    console.log(id);
   let newRecord=record.filter(record=>record.id!=id);

    let newdata = newRecord.map(record=>`${record.id},${record.firstName},${record.lastName},${record.address},${record.phone},${record.email},${record.data_of_birth}`);

    let response = await writeFile(newdata);

    if(!response){
      throw {status:500,message:"Error updating Record"}
    }

   res.status(200).json({message:"Successfully deleted record"})   
    
  } catch (error) {
    res.status(error.status).json({message:error.message})
  }
 }


 module.exports={
    readAll,
    newRecord,
    Update_Record,
    Drop_Record
 }