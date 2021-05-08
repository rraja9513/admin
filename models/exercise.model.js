const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const exerciseSchema=new Schema({
    category:[
        {
            upperbody:{
                uname:{type:String},
                uppercategory:[
                    {
                        ucname:{type:String},
                        udescription: { type: String},
                        uduration: { type: Number},
                        udate: { type: Date},
                        upayment:{type:Number},
                        productImage:{type:String}
                      }, {
                        timestamps: true,
                    }
                ]
            },
            lowerbody:{
                lname:{type:String},
                lowercategory:[
                    {
                        lcname:{type:String},
                        ldescription: { type: String},
                        lduration: { type: Number},
                        ldate: { type: Date},
                        lpayment:{type:Number},
                        productImage:{type:String}
                      }, {
                        timestamps: true,
                    }
                ]
            }
        }
    ]
});
const Exercise=mongoose.model('Exercise',exerciseSchema);
module.exports=Exercise;