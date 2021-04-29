const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const sublowerSchema=new Schema(
    {
        sname:{
            type:String,
            required:true
        }
    }
);
const lowerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    child:sublowerSchema,
    children:[sublowerSchema]
});
const Lower=mongoose.model('Lower',lowerSchema);
module.exports=Lower;