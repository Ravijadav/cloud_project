var express = require('express');
var router = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var autoIncrement=require('mongoose-auto-increment');



/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/:id',function(req,res){
mongoose.connect('mongodb://localhost/houseServices');


var customer=require('./customerSchema.js');

var id=req.params.id;
console.log(id);
	

customer.find({_id:id},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});


router.get('/',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');
var customer=require('./customerSchema.js');
	

customer.find({},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});





router.post('/',function(req,res){
            
var conn=mongoose.connect('mongodb://localhost/houseServices');   
var customer=require('./customerSchema.js');


var newCustomer = new customer(req.body);
console.log("user is:"+newCustomer);

 newCustomer.save(function(err){
	if(err){console.log("error while insertion") }
	else{console.log(req.body);
             res.send('data inserted succesfully');
             mongoose.disconnect(function(err){if(err){console.log('problem in connection close')}})}

});
});


router.delete('/:id',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');   
var customer=require('./customerSchema.js');

var id=req.params.id;

customer.remove({_id:id},function(err,result){
                                if(!err){
                                    console.log('deletion done succesfully')
                                    if(result===1)
                                    {res.send('deletion done succesfully')}
                                    else
                                     {res.send('No data is deleted')}
                                    mongoose.disconnect();
                                    }
                                    })


});


module.exports = router;
