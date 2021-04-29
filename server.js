const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 5000;
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Atlas started successfully")
})
const upperRouter=require('./Routes/upper');
const lowerRouter=require('./Routes/lower');
app.use('/upper',upperRouter);
app.use('/lower',lowerRouter);
app.listen(port,function(){
    console.log("Server started Successfully");
});
