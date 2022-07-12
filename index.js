const express = require('express');//express
const port = process.env.PORT||5500;

const app = express();

// uses (middleware)
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const routes = require('./route')



    app.listen(port,()=>{
        console.log(`Connection established on port ${port} `);
        // console.log(process.env.HOST);
    })

    app.use('/',routes);

    app.use('',(req,res)=>{
    res.status(404).send("notFound");
    });