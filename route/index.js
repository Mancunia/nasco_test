const { Router } = require('express');//destructure router from express
const router = Router();

const {readAll, newRecord,Update_Record,Drop_Record }= require('../controller');//controller


router.get('/',readAll)
router.post('/',newRecord);
router.put('/',Update_Record);
router.delete('/',Drop_Record);


module.exports=router;