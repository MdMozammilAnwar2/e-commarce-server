const User=require('../models/User');
const BigPromise=require('../middlewares/BigPromise');
const cookieToken =require('../utils/CookieToken');


exports.signUp=BigPromise(async (req,res,next)=>{
    const {name,email,password} =req.body;
    //caught the mandatory field and validate
    if(!name){
        res.status(400).json({
            "result":"WARNING",
            "message":"Please enter name"
        })
    }
    if(!email){
        res.status(400).json({
            "result":"WARNING",
            "message":"Please enter email"
        }) 
    }
    if(!password){
        res.status(400).json({
            "result":"WARNING",
            "message":"Please enter password"
        }) 
    }
    //if everything is fine handle here
    const user= await User.create({
        name,
        email,
        password
    });
    
    cookieToken(user,res);
    
})