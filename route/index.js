const { Router } = require('express');//destructure router from express
const router = Router();

const {readAll, newRecord} = require('../controller');//controller


router.get('/',readAll)
router.post('/',newRecord);


module.exports=router;