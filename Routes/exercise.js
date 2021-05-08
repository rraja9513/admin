const router=require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);  
    }
  });
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
  
let Exercise=require('../models/exercise.model');
router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exerxises=>res.json(exerxises))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.post('/add',upload.single('productImage'),(req,res)=>{
    const newExercise=new Exercise({
        category:[
            {
                upperbody:{
                    uname:req.body.uname,
                    uppercategory:[
                        {
                            ucname:req.body.ucname,
                            udescription:req.body.udescription,
                            uduration:req.body.uduration,
                            udate:req.body.udate,
                            upayment:req.body.upayment,
                            productImage:req.file.path
                        }
                    ]
                } 
                   ,
                lowerbody:{
                    lname:req.body.lname,

                    lowercategory:[
                        {
                            lcname:req.body.lcname,
                            ldescription:req.body.ldescription,
                            lduration:req.body.lduration,
                            ldate:req.body.ldate,
                            lpayment:req.body.lpayment,
                            productImage:req.file.path
                        }
                    ]
                }  
                }
        ]
    })
    newExercise.save()
    .then(()=>res.json('Exercise Added'))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.category=[
            {
                upperbody:{
                    uname:req.body.uname,
                    uppercategory:[
                        {
                            ucname:req.body.ucname,
                            udescription:req.body.udescription,
                            uduration:req.body.uduration,
                            udate:req.body.udate,
                            upayment:req.body.upayment,
                            productImage:req.file.path
                        }
                    ]
                } 
                   ,
                lowerbody:{
                    lname:req.body.lname,

                    lowercategory:[
                        {
                            lcname:req.body.lcname,
                            ldescription:req.body.ldescription,
                            lduration:req.body.lduration,
                            ldate:req.body.ldate,
                            lpayment:req.body.lpayment,
                            productImage:req.file.path
                        }
                    ]
                }  
                }
        ]
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports=router;