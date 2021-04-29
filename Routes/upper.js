const router=require('express').Router();
let Upper=require('../models/upper.model');
router.route('/').get((req,res)=>{
    Upper.find()
    .then(uppers=>res.json(uppers))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/add').post((req,res)=>{

    const newUpper=new Upper({name:req.body.name,children:[{sname:req.body.sname}]})
    newUpper.save()
    .then(()=>res.json('Upper Added'))
    .catch(err=>res.status(400).json('Error:'+err));
});
module.exports=router;