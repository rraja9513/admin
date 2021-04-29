const router=require('express').Router();
let Lower=require('../models/lower.model');
router.route('/').get((req,res)=>{
    Lower.find()
    .then(lowers=>res.json(lowers))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/add').post((req,res)=>{
    const newLower=new Lower({name:req.body.name,children:[{sname:req.body.sname}]});
    newLower.save()
    .then(()=>res.json('Lower Added'))
    .catch(err=>res.status(400).json('Error:'+err));
});
module.exports=router;