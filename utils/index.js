

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

   



module.exports={
    toJson
}