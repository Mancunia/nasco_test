const express = require('express');//express
const port = process.env.PORT||5500;
const cors = require('cors')
const app = express();
const config = require('./config');

// uses (middleware)
app.use(cors())


const allowlist = [config.valid_routes]
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

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