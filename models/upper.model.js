const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const subupperSchema=new Schema(
    {
        sname:{
            type:String,
            required:true
        }
    }
);
const upperSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    child:subupperSchema,
    children:[subupperSchema]
});
const Upper=mongoose.model('Upper',upperSchema);
module.exports=Upper;